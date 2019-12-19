describe('Data driven',function(){
	var data=require("./Testdata.js")
	
	it('Data driven step1',function(){
		
			
		browser.get('http://juliemr.github.io/protractor-demo/');
		
	    element(by.model("first")).sendKeys(data.datadrive.firstinput);
	    element(by.model("second")).sendKeys(data.datadrive.secondinput);
	    
	    element(by.id("gobutton")).click();
	    
	    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()
	    		.then(function(value){
	    	console.log(value);
	    	expect(value).toBe(data.datadrive.result);
	    })
	    
	    element(by.model("operator")).element(by.css("option:nth-child(4)")).click().then(function(){
	    	browser.sleep(6000)
	    });
  })
	
	
})