describe('ProtractorAssertions ',function(){
	
	it('ProtractorAssertions',function(){
		
			
		expect(5).toBe(5);
		expect(5).toEqual(5);
		expect('5').toBe("5");
		expect('5').toEqual('5');
		expect('5').toBe(5);
		expect('5').toEqual(5);
		
		/*browser.get('http://juliemr.github.io/protractor-demo/');
		
	    element(by.model("first")).sendKeys("5");
	    element(by.model("second")).sendKeys("4");
	    
	    element(by.id("gobutton")).click();
	    
	    element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()
	    		.then(function(value){
	    	console.log(value);
	    })
	    
	    element(by.model("operator")).element(by.css("option:nth-child(4)")).click().then(function(){
	    	browser.sleep(6000)
	    });*/
  })
	
	
})