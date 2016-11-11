# Bunyan Analytics
Covert operations against Bunyan generated logs gathering the most mission critical data per record.
Bunyan Analytics transforms bunyan logs into its own minified JSON storage objects to disk, 
which, are in turn synchronized with a Redis Cache DB for real-time historical accounting.

## Synopsis

    $ bunyan-analytics --collect /app1/logs/* /app2/logs/*
    $ bunyan-analytics --parse new
    $ bunyan-analytics --report ./path/to/report-definitions.json



