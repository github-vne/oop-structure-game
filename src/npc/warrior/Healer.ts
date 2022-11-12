import Warrior from "../Warrior";
import {
  Observer,
  NotificationManager,
  NotificationEventType
} from "../../NotificationManager";
import { Type } from "../NPC";
import PlayerWarrior from "../../race/PlayerWarrior";
import Player from "../../Player";

export default class Healer extends Warrior implements Observer {
  public type: Type = Type.WARRIOR_HEALER;
  private player: Player;

  constructor(player: Player) {
    super();
    this.player = player;
    NotificationManager.getInstance().addObserver(
      this,
      NotificationEventType.playerTookDamage
    );
  }

  public onEvent(eventType: NotificationEventType, event: Event): void {
    if (eventType == NotificationEventType.playerTookDamage) {
      this.player.health += 100;
    }
  }
}
