import Entity from "../Entity";
import LivingEntity from "../LivingEntity";

export default class Item extends Entity {
  protected use(entity: LivingEntity): void {
    console.info(`use to ${entity}`);
  }
}
