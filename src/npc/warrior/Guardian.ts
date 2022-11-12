import { Type } from "./../NPC";
import Warrior from "../Warrior";
import {
  Observer,
  NotificationEventType,
  NotificationManager
} from "../../NotificationManager";
import World from "../../World";

export default class Guardian extends Warrior implements Observer {
  public static type: Type = Type.WARRIOR_GUARDIAN;

  constructor() {
    super();
    NotificationManager.getInstance().addObserver(
      this,
      NotificationEventType.playerTookDamage
    );
  }

  public onEvent(eventType: NotificationEventType, event: Event): void {
    if (eventType == NotificationEventType.playerTookDamage) {
      for (let m in World.instance.npcs) {
        World.instance.npcs[m].onDamage();
      }
    }
  }
}
