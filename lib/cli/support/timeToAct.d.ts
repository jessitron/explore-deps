import { Room } from "./buildRoom";
declare type ActionHappened = Promise<void>;
export declare function timeToAct(room: Room, past: Room[]): ActionHappened;
export {};
