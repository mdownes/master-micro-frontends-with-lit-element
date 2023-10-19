export class EventBus {
    _bus: EventTarget;

    constructor(description = '') {
        this._bus = document.appendChild(document.createComment(description));
    }

    subscribe(eventName: string, callback: EventListener): void {
        this._bus.addEventListener(eventName, callback);
    }

    unsubscribe(eventName: string, callback: EventListener): void {
        this._bus.removeEventListener(eventName, callback);
    }

    publish(eventName: string, detail: CustomEventInit = {}): void {
        this._bus.dispatchEvent(new CustomEvent(eventName, detail));
    }
}