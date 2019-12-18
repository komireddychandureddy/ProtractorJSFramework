describe('All Locators',function(){
	function add(a,b){
		 element(by.model("first")).sendKeys(a);
		 element(by.model("second")).sendKeys(b);
		    
		 element(by.id("gobutton")).click();
	}
	it('All Locators 1',function(){
		
			
		browser.get('http://juliemr.github.io/protractor-demo/');
		
	   
		add(4, 5);
		add(4,6);
		add(4,3);
		add(4, 5);
		add(4,6);
		add(4,3);
	   
	    
	    element.all(by.repeater("result in memory")).count()
		.then(function(value){
	console.log(value);
})

	    element.all(by.repeater("result in memory")).each(function(item){
	    	item.element(by.css("td:nth-child(3)")).getText().then(function(value){
	    	console.log(value);
	    	})
	    })
	    
	    element(by.model("operator")).element(by.css("option:nth-child(4)")).click().then(function(){
	    	browser.sleep(6000)
	    });
  })
	
	})
