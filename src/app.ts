import { globalConfig, globalLibA } from "./global"

export const app = function (msg) {
    console.log("Called app")
    return globalLibA(msg);
}

export const globalConfigConfigA = globalConfig.configA;
