import Item from "../Item/Item";
import Buff from "../buff/Buff";
import LivingEntity from "../LivingEntity";

export default class Ingredient extends Item {
  public buffs: Array<Buff>;

  constructor(buffs: Array<Buff>) {
    super();
    this.buffs = buffs;
  }

  public use(entity: LivingEntity): void {
    for (let buff in this.buffs) {
      this.buffs[buff].apply(entity);
    }
  }
}
