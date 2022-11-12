import IngredientDecorator from "./IngredientDecorator";
import Ingredient from "./Ingredient";
import AttackPower from "../buff/AttackPower";

export default class DragonBlood extends IngredientDecorator {
  constructor() {
    super(new Ingredient([new AttackPower(15, 50)]));
    this.name = "Кровь дракона";
  }
}
