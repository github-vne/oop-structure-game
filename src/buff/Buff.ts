import LivingEntity from "../LivingEntity";

export default abstract class Buff {
  public static DURATION_INFINITE: number = -1;
  public durationSecs: number = 0;
  public target: LivingEntity = new LivingEntity();
  public applyTimeMs: Date = new Date();

  constructor(durationSeconds: number) {
    this.durationSecs = durationSeconds;
  }

  public apply(target: LivingEntity): void {
    this.applyTimeMs = new Date();
    this.target = target;
    this.target.applyBuff(this);
  }

  public remove(): void {}
}
