# city-and-state

A very comprehensive city and state API.

# install

npm i --save city-and-state

# usage

```js
const CityState = require("city-and-state");
const cityState = new CityState();

cityState.getStates(); // get list of all states i.e. ['Alaska', ... ,'Wyoming']
cityState.getCitiesOfState("Indiana"); // get list of all cities in Indiana
```

# license

isc/bsd
