describe('All Locators',function(){
	function cal(a,b,c){
		 element(by.model("first")).sendKeys(a);
		 element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(option){
		    	 option.getAttribute("value").then(function(test){
		 	    	//console.log(test);
		 	    	if(test==c)
		 	    		option.click();
			    	})
		    })
		      
		 
		 
		    element(by.id("gobutton")).click();
	}
	it('All Locators 1',function(){
		
			
		browser.get('http://juliemr.github.io/protractor-demo/');
		
	   
		cal(4, 5,"DIVISION");
		cal(4,6,"MULTIPLICATION");
		cal(4,3,"SUBTRACTION");
		
		cal(4, 5,"DIVISION");
		cal(4,6,"ADDITION");
		
		 
	    element.all(by.repeater("result in memory")).count().then(function(value){
	    	console.log(value);
	    })

	    element.all(by.repeater("result in memory")).each(function(item){
	    	item.element(by.css("td:nth-child(3)")).getText().then(function(value){
	    	console.log(value);
	    	})
	    })
	    
	    
	     
	    element.all(by.tagName("option")).count().then(function(value){
	    	console.log(value);
	    })
	     element.all(by.tagName("option")).each(function(option){
	    	 option.getAttribute("value").then(function(test){
	 	    	console.log(test);
	 	    	if(test=="MULTIPLICATION")
	 	    		option.click();
		    	})
	    })
	     
	    element(by.model("operator")).element(by.css("option:nth-child(4)")).click().then(function(){
	    	browser.sleep(6000)
	    });
  })
	
	})
