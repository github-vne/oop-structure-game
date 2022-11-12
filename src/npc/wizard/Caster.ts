import {
  Observer,
  NotificationEventType,
  NotificationManager
} from "../../NotificationManager";
import { Type } from "../NPC";
import Wizard from "../Wizard";
import PlayerAttack from "../../events/PlayerAttack";
import AttackPower from "../../buff/AttackPower";
import LivingEntity from "../../LivingEntity";

export default class Caster extends Wizard implements Observer {
  public type: Type = Type.WIZARD_CASTER;

  constructor() {
    super();
    NotificationManager.getInstance().addObserver(
      this,
      NotificationEventType.playerTookDamage
    );
  }

  public onEvent(eventType: NotificationEventType, event: Event): void {
    if (eventType == NotificationEventType.playerAttacked) {
      if (event instanceof PlayerAttack) {
        var eventCoersed = event;
        if (eventCoersed.target instanceof LivingEntity) {
          var effect = new AttackPower(10, -10);
          effect.apply(eventCoersed.target);
        }
      }
    }
  }
}
