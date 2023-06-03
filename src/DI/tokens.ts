import { token } from "brandi";
import { Logger } from "./logger";
import { Counter } from "./counter";

export const TOKENS = {
    logger: token<Logger>('logger'),
    counter: token<Counter>('counter'),
};
