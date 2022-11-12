import Item from "../Item/Item";
import LivingEntity from "../LivingEntity";
import World from "../World";

export enum AttackType {
  Primary,
  Secondary
}

export default class Weapon extends Item {
  attackTime: number = 0;
  damage: number = 0;
  skin: string = "";
  owner: LivingEntity;

  constructor(owner: LivingEntity, damage: number) {
    super();
    this.damage = damage;
    this.owner = owner;
  }

  public attack(attackType: AttackType): void {
    const localPlayer = World.instance.localPlayer;
    const aimEnt = localPlayer.aimEntity();
    if (aimEnt instanceof LivingEntity) {
      aimEnt.onDamage(localPlayer, this.damage);
    }
  }
}
