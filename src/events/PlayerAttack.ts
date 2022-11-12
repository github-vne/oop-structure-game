import Entity from "../Entity";
import Event from "../Event";

export default class PlayerAttack extends Event {
  public target: Entity;
  public damage: number;

  constructor(target: Entity, damage: number) {
    super();
    this.target = target;
    this.damage = damage;
  }
}
