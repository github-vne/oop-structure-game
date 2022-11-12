import Ingredient from "./Ingredient";
import LivingEntity from "../LivingEntity";

export default class IngredientDecorator extends Ingredient {
  protected ingredient: Ingredient;

  constructor(ingredient: Ingredient) {
    super([]);
    this.ingredient = ingredient;
  }

  use(ent: LivingEntity) {
    super.use(ent);
    if (this.ingredient) this.ingredient.use(ent);
  }
}
