import PlayerWizard from "../../race/PlayerWizard";
import Bishop from "./Bishop";
import Caster from "./Caster";
import Defender from "./Defender";
import AbstractHelperFactory from "../AbstractHelperFactory";
import Helper from "../Helper";

// Фабрика (Изменить создание объекта)
export default class WizardFactory extends AbstractHelperFactory {
  public createBuddy(player: PlayerWizard): Helper {
    return new Bishop(player);
  }

  public createDefender(): Helper {
    return new Defender();
  }

  public createAttacker(): Helper {
    return new Caster();
  }
}
