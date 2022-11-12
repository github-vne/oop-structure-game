import Buff from "./Buff";

export default class Speed extends Buff {
  public speed: number;

  constructor(durationSeconds: number, speed: number) {
    super(durationSeconds);
    this.speed = speed;
  }

  public apply(): void {
    super.apply(this.target);
    this.target.speed += this.speed;
  }

  public remove() {
    this.target.speed -= this.speed;
  }
}
