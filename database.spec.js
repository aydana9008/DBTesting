
describe('searching movie titles on amazon', () => {

    var pgp = require('pg-promise')(/*options*/);


    var cn = {
    host: 'localhost',
    port: 5432,
    database: 'dvdrental',
    user: 'postgres',
    password: 'Erlan90081'
    };
    var db = pgp(cn);
     var arr = [];

   
    it('should pass movie titles on amazon search box starting with "Z"', () => {
        browser.ignoreSynchronization = true;
        browser.get("https://www.amazon.com");
        db.any(`select title from film where title LIKE 'Z%'`).then(result=>{
          arr = result;
            }).catch(error=>{
                console.log(error)
            }).then(()=>{
                arr.forEach(function(i){
                    $("#twotabsearchtextbox").sendKeys(i.title);
                    browser.sleep(2000);
                    $(".nav-search-submit.nav-sprite .nav-input").click();
                    browser.sleep(2000);
                    $(".a-color-state.a-text-bold").getText().then(text=>{
                        console.log(text);
                        browser.navigate().back();
                })
           });
        })
    });
})
