import Entity from "./Entity";
import Buff from "./buff/Buff";

export default class LivingEntity extends Entity {
  public health: number = 0;
  public armor: number = 0;
  public speed: number = 0;
  public power: number = 0;
  public isGod: boolean = false;
  private appliedBuffs: Array<Buff> = [];

  public onDamage(attacker: Entity, damage: number): void {
    this.health -= damage / this.armor == 0 ? 1 : this.armor;
  }

  public applyBuff(buff: Buff): void {
    this.appliedBuffs.push(buff);
  }
}
