import Entity from "../Entity";
import Event from "../Event";

export default class PlayerTookDamage extends Event {
  public attacker: Entity;
  public damage: number;

  constructor(attacker: Entity, damage: number) {
    super();
    this.attacker = attacker;
    this.damage = damage;
  }
}
