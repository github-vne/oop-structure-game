import Item from "./Item";
import Ingredient from "../Ingredient/Ingredient";
import LivingEntity from "../LivingEntity";
import IngredientDecorator from "../Ingredient/IngredientDecorator";

export default class Elixir extends Item {
  // not array
  public ingredient: Ingredient = new Ingredient([]);

  public setIngredient(ingredient: Ingredient): void {
    this.ingredient = ingredient;
  }

  public addIngredient(ingredient: Ingredient): void {
    this.ingredient = new IngredientDecorator(ingredient);
  }

  public use(ent: LivingEntity): void {
    this.ingredient.use(ent);
  }
}
