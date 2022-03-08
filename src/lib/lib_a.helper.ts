import { globalConfig } from "../global";

const libAHelper = function (x) {
    console.log("Called libAHelper")
    return x + "+libAHelper" + "+" + globalConfig.configA
}

export {
    libAHelper
}