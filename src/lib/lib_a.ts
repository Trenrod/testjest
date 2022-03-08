import { libAHelper } from "./lib_a.helper"

const libA = function (msg) {
    console.log("Called libA")
    return msg + "+" + libAHelper("libA");
}

export {
    libA
}