import Weapon, { AttackType } from "./Weapon";
import LivingEntity from "../LivingEntity";
import World from "../World";

export default class Alebarda extends Weapon {
  private static DAMAGE: number = 10;
  private RADIUS: number = 100;

  constructor(owner: LivingEntity) {
    super(owner, Alebarda.DAMAGE);
  }

  public attack(attackType: AttackType): void {
    switch (attackType) {
      case AttackType.Primary:
        super.attack(attackType);
        break;
      case AttackType.Secondary:
        const world = World.instance;
        const allArr = world.players
          .map(el => el as LivingEntity)
          .concat(world.npcs.map(el => el as LivingEntity));
        allArr.forEach(el => {
          if (el.distance(this.owner.getPosition()) < this.RADIUS) {
            el.onDamage(this.owner, Alebarda.DAMAGE);
          }
        });
        break;
    }
  }
}
