import LivingEntity from "../LivingEntity";

export enum Type {
  WARRIOR_GUARDIAN,
  WARRIOR_HEALER,
  WARRIOR_PARTNER,
  WIZARD_BISHOP,
  WIZARD_CASTER,
  WIZARD_DEFENDER
}

export default class NPC extends LivingEntity {
  onDamage(): void {}
}
