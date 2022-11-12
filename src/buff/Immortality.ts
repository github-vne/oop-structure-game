import Buff from "./Buff";
import LivingEntity from "../LivingEntity";

export default class Immortality extends Buff {
  constructor(durationSeconds: number = 0) {
    super(durationSeconds);
  }

  public apply(target: LivingEntity): void {
    super.apply(target);
    this.target.isGod = true;
  }

  public remove(): void {
    this.target.isGod = false;
  }
}
