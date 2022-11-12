import Player from "../Player";
import WarriorFactory from "../npc/warrior/WarriorFactory";

export default class PlayerWarrior extends Player {
  constructor() {
    super(new WarriorFactory());
  }
}
