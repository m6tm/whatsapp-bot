"use strict";

import { AppEnv } from "../types/env";

export function getEnv(): AppEnv {
        return process.env as any
}