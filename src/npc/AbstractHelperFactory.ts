import Helper from "./Helper";
import Player from "../Player";

export default abstract class AbstractHelperFactory {
  abstract createBuddy(player: Player): Helper;
  abstract createDefender(): Helper;
  abstract createAttacker(): Helper;
}
