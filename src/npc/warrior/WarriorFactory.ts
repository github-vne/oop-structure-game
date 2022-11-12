import Guardian from "./Guardian";
import Healer from "./Healer";
import Partner from "./Partner";
import AbstractHelperFactory from "../AbstractHelperFactory";
import Player from "../../Player";
import Helper from "../Helper";

export default class WarriorFactory extends AbstractHelperFactory {
  public createBuddy(player: Player): Helper {
    return new Healer(player);
  }

  public createDefender(): Helper {
    return new Guardian();
  }

  public createAttacker(): Helper {
    return new Partner();
  }
}
