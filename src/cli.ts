/* tslint:true */

"use strict";

import BunyanSpy from "lib/lib"
import fs from "fs"

process.argv.forEach((argument)) => {
    console.log(argument)
}
const logs = new BunyanSpy(process.argv, () => {

})