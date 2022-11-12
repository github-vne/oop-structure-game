import LivingEntity from "./LivingEntity";
import Item from "./Item/Item";
import NPC from "./npc/NPC";
import Weapon, { AttackType } from "./weapon/Weapon";
import Entity from "./Entity";
import Elixir from "./Item/Elixir";
import DragonBlood from "./Ingredient/DragonBlood";
import PlayerTookDamage from "./events/PlayerTookDamage";
import {
  NotificationManager,
  NotificationEventType
} from "./NotificationManager";
import { Race } from "./race/Race";
import AbstractHelperFactory from "./npc/AbstractHelperFactory";
import Helper from "./npc/Helper";

// Private constructor - ?
export default class Player extends LivingEntity {
  private race: Race = Race.Warrior;
  private currentItem: Item = new Item();
  protected helperFactory: AbstractHelperFactory;
  private inventory: Array<Item> = [];
  private summons: Array<NPC> = [];
  private isLocal: boolean = false;
  private helpers: Array<Helper> = new Array();

  constructor(helperFactory: AbstractHelperFactory) {
    super();
    this.helperFactory = helperFactory;
  }

  public addToInventory(item: Item): void {
    this.inventory.push(item);
  }

  public aimPos(): Array<string> {
    return [];
  }

  public aimEntity(): Entity | null {
    return null;
  }

  public aimLivingEntity(): LivingEntity {
    const ent = this.aimEntity();
    if (ent instanceof LivingEntity) {
      return ent;
    }
    return new LivingEntity();
  }

  public use(): void {
    const item = this.currentItem;
    if (item instanceof Elixir) {
      item.setIngredient(new DragonBlood());
    }
  }

  public attack(attackType: AttackType): void {
    var item = this.currentItem;
    if (item instanceof Weapon) {
      item.attack(attackType);
    }
  }

  public onDamage(attacker: Entity, damage: number): void {
    super.onDamage(attacker, damage);
    let event = (new PlayerTookDamage(attacker, damage) as unknown) as Event;
    NotificationManager.getInstance().postNotification(
      NotificationEventType.playerTookDamage,
      event
    );
  }

  public summonAttacker(): void {
    const helper = this.helperFactory.createAttacker();
    this.helpers.push(helper);
  }
}
