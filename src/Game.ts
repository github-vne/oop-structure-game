import World from "./World";
import { AttackType } from "./weapon/Weapon";

export default class Game {
  onKeyPressed(mouseKey: number, keyboardKey: number): void {
    var world = World.instance;
    if (mouseKey == 0) {
      world.localPlayer.attack(AttackType.Primary);
    } else if (mouseKey == 1) {
      world.localPlayer.attack(AttackType.Secondary);
    }
  }
}
