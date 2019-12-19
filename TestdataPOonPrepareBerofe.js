describe('PageObjects Data driven', function() {
	var objectDataProvider = require("./data.js")
	var po = require("./PageObjects.js")
	var using = require('jasmine-data-provider');

	beforeEach(function() {
		po.getURL();
		console.log("bafore test/it block started");
	});
	afterEach(function() {
		console.log("after test/it block completed");
	});
	beforeAll(function() {
		console.log(" before describe block started");
	});
	afterAll(function() {
		console.log(" after describe block completed");
	});
	var using = require('jasmine-data-provider');

	using(objectDataProvider.DataDriven, function(data, description) {
		it('Data driven step1' + description, function() {

			// browser.get('http://juliemr.github.io/protractor-demo/');

			po.firstinput.sendKeys(data.firstinput);
			po.secondinput.sendKeys(data.secondinput);

			po.goButton.click();

			po.result.getText().then(function(value) {
				console.log(value);
				expect(value).toBe(data.result);
			})

			element(po.searchoperator).element(po.searchoption).click().then(
					function() {
						browser.sleep(6000)
					});
		})
	})
	using(objectDataProvider.DataDriven, function(data, description) {
		it('Data driven step2' + description, function() {

			// browser.get('http://juliemr.github.io/protractor-demo/');

			po.firstinput.sendKeys(data.firstinput);
			po.secondinput.sendKeys(data.secondinput);

			po.goButton.click();

			po.result.getText().then(function(value) {
				console.log(value);
				expect(value).toBe(data.result);
			})

			element(po.searchoperator).element(po.searchoption).click().then(
					function() {
						browser.sleep(6000)
					});
		})

	})
})