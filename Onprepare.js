describe('PageObjects Data driven',function(){
	var data=require("./Testdata.js")
	var po=require("./PageObjects.js")
	
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
	it('PageObjects and Data driven step1',function(){
		
		
			
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
	
  it('PageObjects and Data driven step2',function(){
		
		
		
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