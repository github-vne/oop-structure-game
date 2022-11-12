import Player from "../Player";
import WizardFactory from "../npc/wizard/WizardFactory";

export default class PlayerWizard extends Player {
  constructor() {
    super(new WizardFactory());
  }
}
