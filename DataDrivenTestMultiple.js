describe('Data driven', function() {
	var objectDataProvider = require("./data.js")
	var using = require('jasmine-data-provider');

	using(objectDataProvider.DataDriven, function(data, description) {
		it('Data driven step1' + description, function() {

			browser.get('http://juliemr.github.io/protractor-demo/');

			element(by.model("first")).sendKeys(data.firstinput);
			element(by.model("second")).sendKeys(data.secondinput);

			element(by.id("gobutton")).click();

			element(by.repeater("result in memory")).element(
					by.css("td:nth-child(3)")).getText().then(function(value) {
				console.log("Acual results value :"+value);
				console.log("expected value :"+data.result);
				
				expect(value).toBe(data.result);
				expect(value).toBe(data.result);
				expect(value).toBe(data.result);
				expect(value).toEqual(data.result);
				console.log("verified");

			})

			expect(element(by.repeater("result in memory")).element(
							by.css("td:nth-child(3)")).getText()).toBe(data.result);
			expect(element(by.repeater("result in memory")).element(
							by.css("td:nth-child(3)")).getText()).toEqual(data.result);

			/*element(by.repeater("result in memory")).element(
					by.css("td:nth-child(3)")).getText().then(function(value) {
				console.log(value);

			})*/

			/*
			 * element(by.model("operator")).element(by.css("option:nth-child(4)")).click().then(function(){
			 * browser.sleep(6000) });
			 */
		})
	})
})