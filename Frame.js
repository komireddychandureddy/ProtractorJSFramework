describe('Protractor Frame steps',function() {  


it('Open NonAngular js website Alerts',function() {

//rahulonlinetutor@gmail.com

browser.waitForAngularEnabled(false);

browser.driver.manage().window().maximize();

browser.get("http://qaclickacademy.com/practice.php");
browser.switchTo().frame(element(by.id('courses-iframe')).getWebElement());
element(by.css("a[href*='sign_in']")).getText().then(function(text)
{

console.log(text);
})

})
});

