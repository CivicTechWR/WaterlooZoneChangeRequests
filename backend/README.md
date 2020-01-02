# Waterloo Zone Changes Requests Backend Server / Scrapper

This subdirectory contains the Node.JS backend server responsible for scraping, and caching, [zone change requests](https://www.waterloo.ca/en/government/zone-changes.aspx) from the City of Waterloo. 

## Requirements

* `Node.JS >= v12`

## Installing dependencies

Before starting the server, please ensure you have all dependencies, by running `npm install`.

## Starting the server

```
npm start
```

Keep in mind that, by default, the server uses real scrapped data. You should see the pooling interval once you start the service: `RESTFUL API started on 3001. Pooling interval is set to 120 minutes`. You may expand/shrink it by specifying the interval:
```
INTERVAL=3600 npm start
```

Ensure you do not specify an overly small interval, or you will end up with `429` HTTP errors. For more information, please refer to section [Limitations](#limitations).

### Using test data

If you simply want to perform some tests, you can turn off the scraping, and just use some test data. Simply run
```
npm run testServer
```

## REST API

* `GET /fetch`

#### Data Example

Single zone change request

```
[
    {
      "applicant": "Kart Race Tracks Ltd.",
      "ward": "Mushroom Kingdom",
      "staffContactName": "Mario",
      "staffContactEmail": "mario@email.com",
      "locationName": "Rainbow Road",
      "id": "app1",
      "detailsUrl": "https://www.waterloo.ca/en/government/zone-changes.aspx#app1"
    }
]

```

## Standalone scrapper

You do not need the backend server to start scrapping the City of Waterloo Zone Change Requests.

Run `npm run testScrapper` for sample usage.

## Limitations

### Why am I getting the following 429 message?

```
Unable to extract coordinates for zoneChange lodgest. StatusCode: 429, Details: null. Skipping...
```

The original page contains minified Google Maps links, which the scrapper tries to convert to coordinates.
For this to happen, it needs access to the unminified URL, by making a HTTP request. If it receives a `429` response,
it means too many requests have been made. Please ensure you are not using an extermely small pooling interval.