import Weapon, { AttackType } from "./Weapon";
import LivingEntity from "../LivingEntity";
import World from "../World";

export default class Sword extends Weapon {
  private static DAMAGE: number = 10;
  private SUPER_DAMAGE: number = Sword.DAMAGE * 2;

  constructor(owner: LivingEntity) {
    super(owner, Sword.DAMAGE);
  }

  public attack(attackType: AttackType): void {
    const target = World.instance.localPlayer.aimLivingEntity();
    switch (attackType) {
      case AttackType.Primary:
        target.onDamage(this.owner, this.damage);
        break;
      case AttackType.Secondary:
        target.onDamage(this.owner, this.SUPER_DAMAGE);
        break;
    }
  }
}
