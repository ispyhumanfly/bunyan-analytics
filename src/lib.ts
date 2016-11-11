/* tslint:enable */

"use strict";

import * as console from "console"
import * as jsonfile from "jsonfile2"
import * as jsonrepair from "jsonrepair"
import * as shell from "shelljs"
import * as util from "util"
import * as fs from "fs"
import * as os from "os"

export class BunyanSpy {

    public logfile: string

    constructor(logfile: string) {

        let results = new Array()

        fs.readdir(logfile, (err, log) => {

            if (err) return

            log.forEach(() => {

                results.push(jsonrepair(jsonfile.read(this, "utf8")))
                console.log(util.inspect(Object(results)))
            })
        })
    }
    public collect() {return}
    public parse() {return}
    public report() {return}
}

