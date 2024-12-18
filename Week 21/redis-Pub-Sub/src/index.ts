import { PubSubManager } from "./PubSubManager";

setTimeout(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)
