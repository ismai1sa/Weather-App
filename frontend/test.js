const {By,Key,Builder} =require("selenium-webdriver");
require("geckodriver");
async function test_case(){
  let driver = await new Builder().forBrowser("firefox").build();
  
  await driver.get("http://localhost:3000")
  console.log(await driver.getTitle());
  await driver.findElement(By.name("city")).sendKeys("berlin",Key.RETURN)
  
  async function tempElement(){
    const x = await driver.findElement(By.css('h3'))
    const y = await x.getText()
    const pattern = /^[0-9]{1,2}°C$/
    
    if(pattern.test(y)){
      console.log("Test #1 Sucess")
    }
   else{
      console.log("Test #1 Failed")
    }
  
  };
  
  setTimeout(tempElement,2000);
  
}
test_case();
