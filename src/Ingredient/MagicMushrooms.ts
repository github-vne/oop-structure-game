import IngredientDecorator from "./IngredientDecorator";
import Ingredient from "./Ingredient";
import Speed from "../buff/Speed";

export default class MagicMushrooms extends IngredientDecorator {
  constructor() {
    super(new Ingredient([new Speed(3, 10)]));
    this.name = "Волшебные грибы";
  }
}
