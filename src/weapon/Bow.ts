import Weapon, { AttackType } from "./Weapon";
import LivingEntity from "../LivingEntity";
import World from "../World";
import Entity from "../Entity";

export default class Bow extends Weapon {
  static damage: number = 0;
  inZoom: boolean = false;

  constructor(owner: LivingEntity) {
    super(owner, 10);
  }

  public attack(attackType: AttackType): void {
    switch (attackType) {
      case AttackType.Primary:
        const localPlayer = World.instance.localPlayer;
        var aimPos = localPlayer.aimPos();
        var arrow = new Arrow(localPlayer.getPosition());
        arrow.spawn();
        break;
      case AttackType.Secondary:
        this.inZoom = !this.inZoom;
        break;
    }
  }

  public postProcess(): void {
    super.postProcess();
    if (this.inZoom) {
      // ...
    }
  }
}

export class Arrow extends Entity {
  direction: Array<string>;
  attacker: LivingEntity = new LivingEntity();

  constructor(direction: Array<string>) {
    super();
    this.direction = direction;
  }

  public onCollide(e: Entity): void {
    super.onCollide(e);

    if (e instanceof LivingEntity) {
      e.onDamage(this.attacker, Bow.damage);
    }
  }
}
