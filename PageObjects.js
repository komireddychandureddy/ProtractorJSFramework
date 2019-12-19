
/**
 * http://usejsdoc.org/
 */
function HomePage() {

	this.firstinput = element(by.model("first"));

	this.secondinput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.result = element(by.css("h2[class='ng-binding']"));
	this.search = by.css('input');
	this.searchoperator = by.model("operator");
	this.searchoption = by.css("option:nth-child(4)");

	this.getURL = function() {

		browser.get('http://juliemr.github.io/protractor-demo/');
	};

};

module.exports = new HomePage();
/*
 * a.getModel(); console.log(a.engine);
 */

