import Buff from "./Buff";
import LivingEntity from "../LivingEntity";

export default class AttackPower extends Buff {
  public power: number;

  constructor(durationSeconds: number, power: number) {
    super(durationSeconds);
    this.power = power;
  }

  public apply(target: LivingEntity): void {
    super.apply(target);
    this.target.power += this.power;
  }

  public remove() {
    this.target.power -= this.power;
  }
}
