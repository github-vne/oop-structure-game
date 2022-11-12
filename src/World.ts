import Player from "./Player";
import Ingredient from "./Ingredient/Ingredient";
import NPC, { Type } from "./npc/NPC";
import PlayerWarrior from "./race/PlayerWarrior";

export default class World {
  static instance: World = new World();
  localPlayer: Player = new PlayerWarrior();
  players: Array<Player> = [];
  npcs: Array<NPC> = [];
  items: Array<Ingredient> = [];
}
