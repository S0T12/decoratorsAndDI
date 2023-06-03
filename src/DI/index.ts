import { TOKENS } from "./tokens";
import { container } from "./container";

const counter = container.get(TOKENS.counter);

counter.increase();