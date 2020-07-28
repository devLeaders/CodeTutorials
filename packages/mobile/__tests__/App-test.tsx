import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'Users/damiankolenda/Projects/Builds/app-release.apk'};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(10000);

}) // Sometime for the app to load
test('my first appium test', async () => {
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('alertButton')
    await element.click()
    //expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});
