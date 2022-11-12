import IngredientDecorator from "./IngredientDecorator";
import Immortality from "../buff/Immortality";
import Ingredient from "./Ingredient";

export default class PhilosophyStoneDust extends IngredientDecorator {
  constructor() {
    super(new Ingredient([new Immortality(4)]));
    this.name = "Пыль философского камня";
  }
}
