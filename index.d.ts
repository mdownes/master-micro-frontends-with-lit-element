import { EventBus } from "./src/services/eventbus";

export { };
declare global {
    interface Window {
        EventBus: EventBus;
    }
}