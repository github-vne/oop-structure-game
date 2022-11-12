import Wizard from "../Wizard";
import {
  Observer,
  NotificationManager,
  NotificationEventType
} from "../../NotificationManager";
import { Type } from "../NPC";
import PlayerWizard from "../../race/PlayerWizard";
import PlayerTookDamage from "../../events/PlayerTookDamage";
import AttackPower from "../../buff/AttackPower";

export default class Bishop extends Wizard implements Observer {
  public type: Type = Type.WIZARD_BISHOP;
  private player: PlayerWizard;

  constructor(player: PlayerWizard) {
    super();
    this.player = player;
    NotificationManager.getInstance().addObserver(
      this,
      NotificationEventType.playerTookDamage
    );
  }

  public onEvent(eventType: NotificationEventType, event: Event): void {
    if (eventType == NotificationEventType.playerTookDamage) {
      if (event instanceof PlayerTookDamage) {
        var effect = new AttackPower(10, 10);
        effect.apply(this.player);
      }
    }
  }
}
