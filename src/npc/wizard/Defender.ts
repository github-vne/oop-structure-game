import Wizard from "../Wizard";
import {
  Observer,
  NotificationEventType,
  NotificationManager
} from "../../NotificationManager";
import { Type } from "../NPC";
import LivingEntity from "../../LivingEntity";

export default class Defender extends Wizard implements Observer {
  public static type: Type = Type.WIZARD_DEFENDER;

  constructor() {
    super();
    NotificationManager.getInstance().addObserver(
      this,
      NotificationEventType.playerTookDamage
    );
  }

  public onEvent(eventType: NotificationEventType, event: Event): void {
    if (eventType == NotificationEventType.playerTookDamage) {
      var eventCoerced = event;
      if (eventCoerced instanceof LivingEntity) {
        eventCoerced.onDamage(this, 40);
      }
    }
  }
}
