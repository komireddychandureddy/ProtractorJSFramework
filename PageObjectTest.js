describe('PageObjects Data driven',function(){
	var data=require("./Testdata.js")
	var po=require("./PageObjects.js")
	
	
	it('PageObjects and Data driven step1',function(){
		
		po.getURL();
			
		//browser.get('http://juliemr.github.io/protractor-demo/');
		
		po.firstinput.sendKeys(data.datadrive.firstinput);
		po.secondinput.sendKeys(data.datadrive.secondinput);
	    
		po.goButton.click();
	    
	   po.result.getText().then(function(value){
	    	console.log(value);
	    	expect(value).toBe(data.datadrive.result);
	    })
	    
	   element(po.searchoperator).element(po.searchoption).click().then(function(){
	    	browser.sleep(6000)
	    });
  })
	
	
})