export default class Entity {
  public name: string = "";
  private position: Array<string> = ["", ""];
  private size: Array<string> = ["", ""];

  public getPosition(): Array<string> {
    return this.position;
  }

  public distance(pos: Array<string>): number {
    return Number([this.position[0] + pos[0], this.position[1] + pos[1]]);
  }

  public setPosition(position: Array<string>): void {
    this.position = position;
  }

  public getSize(): Array<string> {
    return this.size;
  }

  public setSize(size: Array<string>): void {
    this.size = size;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public spawn(): void {}
  public postProcess(): void {}

  public onCollide(entity: Entity): void {
    console.info(`Entity = ${entity}`);
  }
}
