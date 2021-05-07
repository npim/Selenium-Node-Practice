require('geckodriver');
require('chromedriver');
const CityState = require("city-and-state");
const cityState = new CityState();
const { random } = require('make-random');

const {Builder, By, Key, until} = require('selenium-webdriver');
async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('https://www.booking.com');
    let city = cityState.getStates()[6];//array of state names in the US
    await driver.findElement(By.name('ss')).sendKeys(city.toString(), Key.RETURN);
}

example();