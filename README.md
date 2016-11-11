# Bunyan Analytics
Covert operations against Bunyan generated logs gathering the most mission critical data per record.
Bunyan Analytics transforms bunyan logs into its own minified JSON storage objects to disk, 
which, are in turn synchronized with a Redis Cache DB for real-time historical accounting.

## Synopsis

### Cross-Platform CLI

    $ bunyan-analytics --stage /app1/logs/* /app2/logs/*

    $ bunyan-analytics --collect 4d

    $ bunyan-analytics --query ./path/to/report-definitions.json

### Programming Interface

    #!/usr/local/bin/typescript

    import { BunyanAnalytics } from "bunyan-analytics"

    const logs = new BunyanAnalytics(stage: "/var/log/bunyan-analytics")

    let collection = logs.collect(["/app1/logs", "/app2/logs"])

    for(let object in Array.keys(collection)) {
        console.log(object)
    }

### Services Interface

    Coming Soon

## Issues
[text](http://link)



