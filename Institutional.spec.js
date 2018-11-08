require('../Utilities/CustomLocators.js');
//var HomePage = require('../Pages/Home.page.js');
var InstitutionalPage = require('../Pages/Institutional.page.js');
var flytapWindows = [];
var institutionalData = require('../TestData/institutionalData.json');
var EC=protractor.EcpectedConditions;
var actualSubmenuList=[];

describe('Flytap Institutional page', () => {
    xdescribe(' ', ()=>{

        var EC=protractor.EcpectedConditions;
     
        it('should get text from -about us-',()=>{
            browser.waitForAngularEnabled(false);
            browser.get("https://www.tapairportugal.com/en/");
            browser.sleep(3000);
            browser.actions().mouseMove($(".menu.js-mobile-button .content-ul li:nth-of-type(2) .text")).perform();
            // browser.wait(EC.visibilityOf($(".content-ul li:nth-of-type(2) .item-menu .item-link")),7000).then(()=>{
            //     var arr=$$(".content-ul li:nth-of-type(2) .item-menu .item-link").get(0);
            //     arr.getText().then(function(text){
            //     console.log(text);
            //     })
            // });
     
            browser.sleep(2000);
            var arr=$$(".content-ul li:nth-of-type(2) .item-menu .item-link").get(0);
            arr.getText().then(function(text){
                console.log(text);
            })
     
        });
     
     
     });

    describe('1. As a user I should be able to navigate to the Institutional page and click on each element of the main menu', () => {
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get(institutionalData.mainTrheePages.homePage.url);
            element(by.linkText(institutionalData.mainTrheePages.institutionalPage.link_Text)).click();
            browser.getAllWindowHandles().then(function(instWindow){
                flytapWindows=instWindow;                
                    browser.close().then(() => {
                        browser.switchTo().window(flytapWindows[1]).then(function(){
                            browser.sleep(1000);
                        })
                    })
                })
        })
        
        it('1.1. Should check if the page title and URL address are correct', () => {            
            expect(browser.getTitle()).toEqual('Institutional | TAP Air Portugal');
            expect(browser.getCurrentUrl()).toEqual('https://www.tapairportugal.com/en/');     
        })               
        it('1.2. When Flytap link is clicked home page should be opened in a new tab',() => {            
            //click and switch to the window
            var Button=InstitutionalPage.MainMenu.get(0);
            var partURL=institutionalData.mainMenu.submenu_url1;
            InstitutionalPage.clickAndSwitchToWindow(Button, partURL);                                 
        })
        it('1.3. When Institutional link is clicked Institutional page should be opened in a new tab',() => {
            //click and switch to the window
            var Button=InstitutionalPage.MainMenu.get(1);
            var partURL=institutionalData.mainMenu.submenu_url2;
            InstitutionalPage.clickAndSwitchToWindow(Button, partURL);
        })
        it('1.4. When TAP Corporate link is clicked that page should be opened in a new tab',() => {
            //click and switch to the window
            var Button=InstitutionalPage.MainMenu.get(2);
            var partURL=institutionalData.mainMenu.submenu_url3;
            InstitutionalPage.clickAndSwitchToWindow(Button, partURL);
        })
        it('1.5. When TAP Store link is clicked it should be opened in a new tab',() => {
            //click and switch to the window
            var Button=InstitutionalPage.MainMenu.get(3);
            var partURL=institutionalData.mainMenu.submenu_url4;
            InstitutionalPage.clickAndSwitchToWindow(Button, partURL);
        })
        it('1.6. When Languages link is clicked it should be opened in a new tab',() => {
            $('.text.desktop-only').click();
            expect($('div#modal-lang').getAttribute('aria-hidden')).toContain(false);
        })
    })
    fdescribe("2. As a user I should be able to open each element of the Insitutional Page's services menu",() => {
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get(institutionalData.mainTrheePages.institutionalPage.url);
        })
        it('2.1. Should click on About Us link and open that page',() => {            
            //click and open
            var Button=InstitutionalPage.institutionalMenu.get(0);
            var  partURL=institutionalData.servicesMenu.submenu_url1;
            InstitutionalPage.clickAndOpen(Button, partURL);                                
        })
        it('2.2. Should click on Our History link and open that page',() => {            
            //click and open
            var Button=InstitutionalPage.institutionalMenu.get(1);
            var  partURL=institutionalData.servicesMenu.submenu_url2;
            InstitutionalPage.clickAndOpen(Button, partURL);                                
        })
        it('2.3. Should click on Responsibility link and open that page',() => {            
            //click and open
            var Button=InstitutionalPage.institutionalMenu.get(2);
            var  partURL=institutionalData.servicesMenu.submenu_url3;
            InstitutionalPage.clickAndOpen(Button, partURL);                                
        })
        it('2.4. Should click on Media link and open that page',() => {            
            //click and open
            var Button=InstitutionalPage.institutionalMenu.get(3);
            var  partURL=institutionalData.servicesMenu.submenu_url4;
            browser.sleep(1000);
            InstitutionalPage.clickAndOpen(Button, partURL);                                
        })
        it('2.5. Should click on Book a flight link and open it in a new window',() => {            
            //click and switch to the window
            var Button0=InstitutionalPage.institutionalMenu.get(4);
            var partURL0=institutionalData.servicesMenu.submenu_url5;
            InstitutionalPage.clickAndSwitchToWindow(Button0, partURL0);
            browser.sleep(1000);                              
        })
        it('2.6. A drop_down_menu_list should not display without mouse hover over the services menu. ***negative test',() => {               
            expect(InstitutionalPage.dropdownMenu.get(0).getAttribute('class')).not.toContain('is-hover')  
        })
        it('2.7. Should check if a drop_down_menu_list displays when mouse hovers over About Us link.',() => {            
            //hover over
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(0)).perform();
            browser.sleep(1500);    
            expect(InstitutionalPage.dropdownMenu.get(0).getAttribute('class')).toContain('is-hover');   
            browser.actions().mouseMove(InstitutionalPage.MainMenu.get(1)).perform();     
        })
        it('2.8. Should check if a drop_down_menu_list displays when mouse hovers over Our History link',() => {            
            //hover over
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(1)).perform();
            browser.sleep(1500);    
            expect(InstitutionalPage.dropdownMenu.get(1).getAttribute('class')).toContain('is-hover'); 
            browser.actions().mouseMove(InstitutionalPage.MainMenu.get(1)).perform();  
        })
        it('2.9. Should check if a drop_down_menu_list displays when mouse hovers over Responsibility link',() => {            
            //hover over
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(2)).perform();
            browser.sleep(1500);    
            expect(InstitutionalPage.dropdownMenu.get(2).getAttribute('class')).toContain('is-hover'); 
            browser.actions().mouseMove(InstitutionalPage.MainMenu.get(1)).perform();  
        })
        fit('2.10. Should check if a drop_down_menu_list displays when mouse hovers over Media link',() => {            
            //hover over
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(3)).perform();
            browser.sleep(1500);    
            expect(InstitutionalPage.dropdownMenu.get(3).getAttribute('class')).toContain('is-hover');
            browser.actions().mouseMove(InstitutionalPage.MainMenu.get(1)).perform();   
        })
        fit('2.11. Should check the submenu list',() => {   

            //I should improve this part. 
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(0)).perform();
            browser.sleep(1500);
            for(var i=0; i<4; i++){                 
                expect(InstitutionalPage.submenuElements.get(i).isDisplayed()).toBe(true);   
                InstitutionalPage.submenuElements.get(i).getText().then(function(text){
                    actualSubmenuList.push(text);
                    expect(institutionalData.expectedSubmenuList[i]).toEqual(actualSubmenuList[i]);
                })             
            };    
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(1)).perform();
            browser.sleep(1500);           
            for(var i=4; i<5; i++){                 
                expect(InstitutionalPage.submenuElements.get(i).isDisplayed()).toBe(true);  
                InstitutionalPage.submenuElements.get(i).getText().then(function(text){
                    actualSubmenuList.push(text);
                    expect(institutionalData.expectedSubmenuList[i]).toEqual(actualSubmenuList[i]);
                })              
            };    
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(2)).perform();
            browser.sleep(1500);           
            for(var i=5; i<6; i++){                 
                expect(InstitutionalPage.submenuElements.get(i).isDisplayed()).toBe(true);      
                InstitutionalPage.submenuElements.get(i).getText().then(function(text){
                    actualSubmenuList.push(text);
                    expect(institutionalData.expectedSubmenuList[i]).toEqual(actualSubmenuList[i]);
                })          
            }; 
            browser.actions().mouseMove(InstitutionalPage.institutionalMenu.get(3)).perform();
            browser.sleep(1500);           
            for(var i=6; i<8; i++){                 
                expect(InstitutionalPage.submenuElements.get(i).isDisplayed()).toBe(true);         
                InstitutionalPage.submenuElements.get(i).getText().then(function(text){
                    actualSubmenuList.push(text);   
                    expect(institutionalData.expectedSubmenuList[i]).toEqual(actualSubmenuList[i]);                 
                })      
            };                                   
        })
    })
    describe("3. As a user I should be able to manipulate the elements of the slide show part",() => {
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get('https://www.tapairportugal.com/en/');
        })
        it("3.1. When clicked on the first_Radio_Button, the first_Slide should be displayed", () => {            
            InstitutionalPage.fourRadioButtons.get(0).click();
            expect(InstitutionalPage.fourSlides.get(1).getAttribute('aria-hidden')).toContain(false);
        })
        it("3.2. Verify that the button of the first_Slide is displayed and enabled.", () => {
            //do not click on this button. It downloads the file
            expect(InstitutionalPage.buttonsOnFourSlides.get(1).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttonsOnFourSlides.get(1).isEnabled()).toBe(true);
        })
        it("3.3. When clicked on the second_Radio_Button, the second_Slide should be displayed.", () => {
            InstitutionalPage.fourRadioButtons.get(1).click();
            expect(InstitutionalPage.fourSlides.get(2).getAttribute('aria-hidden')).toContain(false);
        })
        it("3.4. When clicked on the button of the second_Slide, browser should open that page.", () => {
            //click and open
            var Button=InstitutionalPage.buttonsOnFourSlides.get(2);
            var  partURL="/about-us/recruitment";
            InstitutionalPage.clickAndOpen(Button, partURL);          
        })
        it("3.5. When clicked on the third_Radio_Button, the third_Slide should be displayed", () => {
            InstitutionalPage.fourRadioButtons.get(2).click();
            expect(InstitutionalPage.fourSlides.get(3).getAttribute('aria-hidden')).toContain(false);
        })
        it("3.6. When clicked on the button of the third_Slide browser should open that page.", () => {
            //click and open
            var Button=InstitutionalPage.buttonsOnFourSlides.get(3);
            var  partURL="/tap-awards";
            InstitutionalPage.clickAndOpen(Button, partURL);                           
        })
        it("3.7. When clicked on the fourth_Radio_Button, the fourth_Slide should be displayed", () => {
            InstitutionalPage.fourRadioButtons.get(3).click();
            browser.sleep(500);
            expect(InstitutionalPage.fourSlides.get(4).getAttribute('aria-hidden')).toContain(false);
        })
        it("3.8. When clicked on the button of the fourth_Slide browser should open that page in a new tab.", () => {
            //click and switch to the window
            var Button0=InstitutionalPage.buttonsOnFourSlides.get(4);
            var partURL0='youtube.com';
            InstitutionalPage.clickAndSwitchToWindow(Button0, partURL0);
            browser.sleep(1000);        
        })
        it("3.9. Should check if the arrow buttons are working properly.", () => {
            //click on the second radio button
            InstitutionalPage.fourRadioButtons.get(1).click();
            browser.sleep(1000);
            //verify that the second slide is displayed
            expect(InstitutionalPage.fourSlides.get(2).getAttribute('aria-hidden')).toContain(false);
            //click on the next-arrow-button
            $('.slick-arrow.slick-next').click();
            browser.sleep(1000); 
            //verify that the third slide is displayed
            expect(InstitutionalPage.fourSlides.get(3).getAttribute('aria-hidden')).toContain(false);
            //click on the previous-arrow-button
            $('.slick-arrow.slick-prev').click();
            browser.sleep(1000); 
            //verify that the second slide is displayed again
            expect(InstitutionalPage.fourSlides.get(2).getAttribute('aria-hidden')).toContain(false);     
        })
        it("3.10. The first_Slide should NOT be displayed when clicked on the second_Radio_Button. ***Negative test", () => {            
            InstitutionalPage.fourRadioButtons.get(1).click();
            expect(InstitutionalPage.fourSlides.get(1).getAttribute('aria-hidden')).not.toContain(false);
        })
    })
    describe("4. As a user I should be able to open the links of the middle part",() => {
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get('https://www.tapairportugal.com/en/');
        })
        it("4.1. Middle section_first part should be displayed", () => {
            browser.actions().mouseMove(InstitutionalPage.middleSection_firstPart).perform();
            expect(InstitutionalPage.middleSection_firstPart.isDisplayed()).toBe(true);            
        })
        it("4.2. Recruitment part should be displayed, and when clicked on it a page should be opened on a new tab", () => {
            expect($('aside .item-card a').isDisplayed()).toBe(true)
            //click and switch to the window
            var Button0=$('aside .item-card a');
            var partURL0='recrutamento';
            InstitutionalPage.clickAndSwitchToWindow(Button0, partURL0);
            browser.sleep(1000);           
        })
        it("4.3. Middle section_second part should be displayed", () => {
            browser.actions().mouseMove(InstitutionalPage.middleSection_secondPart).perform();
            expect(InstitutionalPage.middleSection_secondPart.isDisplayed()).toBe(true);            
        })
        it("4.4. Middle section_second part Line1 should be displayed, enabled. When clicked it should open the link", () => {
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(0).isDisplayed()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(0).isEnabled()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(0).getText()).toEqual('TAP’S new Economy Class Medium-Haul menus');            
            //click and open
            var Button=InstitutionalPage.middleSection_secondPart_allLines.get(0);
            var  partURL="press-releases";
            InstitutionalPage.clickAndOpen(Button, partURL);                    
        })
        it("4.5. Middle section_second part Line2 should be displayed, enabled. When clicked it should open the link", () => {
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(1).isDisplayed()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(1).isEnabled()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(1).getText()).toEqual('TAP carries 1.48 million passengers in September');
            //click and open
            var Button=InstitutionalPage.middleSection_secondPart_allLines.get(1);
            var  partURL='press-releases';
            InstitutionalPage.clickAndOpen(Button, partURL);
        })
        it("4.6. Middle section_second part Line3 should be displayed, enabled. When clicked it should open the link", () => {
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(2).isDisplayed()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(2).isEnabled()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(2).getText()).toEqual('TAP inicia recrutamento internacional de Pilotos');
            //click and open
            var Button=InstitutionalPage.middleSection_secondPart_allLines.get(2);
            var  partURL='press-releases';
            InstitutionalPage.clickAndOpen(Button, partURL);
        })
        it("4.7. Middle section_second part Line4 should be displayed, enabled. When clicked it should open the link", () => {
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(3).isDisplayed()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(3).isEnabled()).toBe(true);
            expect(InstitutionalPage.middleSection_secondPart_allLines.get(3).getText()).toEqual('TAP sales jump 18% in the first half of 2018');
            //click and open
            var Button=InstitutionalPage.middleSection_secondPart_allLines.get(3);
            var  partURL='press-releases';
            InstitutionalPage.clickAndOpen(Button, partURL);
        })
        it("4.8. Middle section_third part should be displayed", () => {
            browser.actions().mouseMove(InstitutionalPage.middleSection_secondPart).perform();
            expect(InstitutionalPage.middleSection_thirdPart.isDisplayed()).toBe(true);
        })
        it("4.9. A button in the Middle section should be displayed, enabled. When clicked it should open the link", () => {
            expect(InstitutionalPage.middleSection_button.isDisplayed()).toBe(true);
            expect(InstitutionalPage.middleSection_button.isEnabled()).toBe(true);
            //click and open
            var Button=InstitutionalPage.middleSection_button;
            var  partURL='annual-reports';
            InstitutionalPage.clickAndOpen(Button, partURL);
        })
    })
    describe("5. As a user I should be able to open the links of the buttom part",() => {
        beforeAll(function(){
            browser.waitForAngularEnabled(false);
            browser.get('https://www.tapairportugal.com/en/');
        })
        it('5.1. Buttom section_first part should be displayed', () => {
            expect(InstitutionalPage.buttomSection_threeElements.get(0).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttomSection_threeElements.get(0).getText()).toContain('Our fleet');
        })
        it('5.2. When clicked on a button on the first part, browser should open the link', () => {
            expect(InstitutionalPage.buttomSection_threeButtons.get(0).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttomSection_threeButtons.get(0).isEnabled()).toBe(true);
            //click and switch to the window
            var Button0=InstitutionalPage.buttomSection_threeButtons.get(0);
            var partURL0='/discover-the-fleet';
            InstitutionalPage.clickAndSwitchToWindow(Button0, partURL0);
            browser.sleep(1000);
        })
        it('5.3. Buttom section_second part should be displayed', () => {
            expect(InstitutionalPage.buttomSection_threeElements.get(1).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttomSection_threeElements.get(1).getText()).toContain('Our history');
        })
        it('5.4. When clicked on a button on the second part, browse should open the link', () => {
            expect(InstitutionalPage.buttomSection_threeButtons.get(1).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttomSection_threeButtons.get(1).isEnabled()).toBe(true);
            //click and switch to the window
            var Button1=InstitutionalPage.buttomSection_threeButtons.get(1);
            var partURL1='timeline';
            InstitutionalPage.clickAndOpen(Button1, partURL1);
            browser.sleep(1000);
        })
        it('5.5. Buttom section_third part should be displayed', () => {
            expect(InstitutionalPage.buttomSection_threeElements.get(2).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttomSection_threeElements.get(2).getText()).toContain('The new TAP');
        })
        it('5.6. When clicked on a button on the third part, browser should open the link', () => {
            expect(InstitutionalPage.buttomSection_threeButtons.get(2).isDisplayed()).toBe(true);
            expect(InstitutionalPage.buttomSection_threeButtons.get(2).isEnabled()).toBe(true);
            //click and switch to the window
            var Button2=InstitutionalPage.buttomSection_threeButtons.get(2);
            var partURL2='/the-new-tap';
            InstitutionalPage.clickAndOpen(Button2, partURL2);
            browser.sleep(1000);
        })
    })
});

