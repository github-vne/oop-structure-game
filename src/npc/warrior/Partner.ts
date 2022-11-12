import Warrior from "../Warrior";
import {
  Observer,
  NotificationManager,
  NotificationEventType
} from "../../NotificationManager";
import { Type } from "../NPC";
import PlayerAttack from "../../events/PlayerAttack";
import LivingEntity from "../../LivingEntity";

export default class Partner extends Warrior implements Observer {
  public static type: Type = Type.WARRIOR_PARTNER;

  public Partner() {
    NotificationManager.getInstance().addObserver(
      this,
      NotificationEventType.playerAttacked
    );
  }

  public onEvent(eventType: NotificationEventType, event: Event): void {
    if (eventType == NotificationEventType.playerAttacked) {
      if (event instanceof PlayerAttack) {
        var eventCoerced = event;
        if (eventCoerced.target instanceof LivingEntity) {
          eventCoerced.target.onDamage(this, 10);
        }
      }
    }
  }
}
