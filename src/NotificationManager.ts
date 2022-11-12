export enum NotificationEventType {
  playerTookDamage,
  playerAttacked
}

// Перенос в Player
export class NotificationManager {
  private observers: any = {};
  private static instance: NotificationManager;

  private constructor() {}

  public static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  public postNotification(
    eventType: NotificationEventType,
    event: Event
  ): void {
    const objects: Array<Observer> = this.observers[
      NotificationEventType[eventType]
    ];
    if (objects != null && objects.length) {
      for (let obj in objects) {
        objects[obj].onEvent(eventType, event);
      }
    }
  }

  public addObserver(
    observer: Observer,
    eventType: NotificationEventType
  ): void {
    const id = NotificationEventType[eventType];
    const objects = this.observers[id];
    if (!objects.contains(observer)) objects.push(observer);
  }

  public removeObserver(
    observer: Observer,
    eventType: NotificationEventType
  ): void {
    const id = NotificationEventType[eventType];
    const objects = observer;
    if (objects != null) this.observers.slice(0, id);
  }
}

export abstract class Observer {
  abstract onEvent(eventType: NotificationEventType, event: Event): void;
}
