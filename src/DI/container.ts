import { Container } from "brandi";

import { TOKENS } from "./tokens";
import { ConsoleLogger } from "./logger";
import { Counter } from "./counter";

export const container = new Container();

container
.bind(TOKENS.logger)
.toInstance(ConsoleLogger)
.inTransientScope();

container
.bind(TOKENS.counter)
.toInstance(Counter)
.inTransientScope();