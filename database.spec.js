describe('searching movie titles on amazon', () => {
<<<<<<< HEAD
// Hello I made change yavuz
||||||| merged common ancestors
// Hello I made change mehmet
=======
//Hello This is Mehmet again :)  lkjkljffs
    
    
    
>>>>>>> 1c9d89921e12931ca8b36775be6ea5591e43c23f
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

    
    
   
<<<<<<< HEAD
    it('should pass movie titles on amazon search box starting with "L"', () => {
||||||| merged common ancestors
    it('should pass movie titles on amazon search box starting with "Z"', () => {
=======
    it('should pass movie titles on amazon search box starting with "H"', () => {
>>>>>>> yavuzBranch
        browser.ignoreSynchronization = true;
        browser.get("https://www.amazon.com");
<<<<<<< HEAD
        db.any(`select title from film where title LIKE 'L%'`).then(result=>{
||||||| merged common ancestors
        db.any(`select title from film where title LIKE 'Z%'`).then(result=>{
=======
        db.any(`select title from film where title LIKE 'H%'`).then(result=>{
>>>>>>> yavuzBranch
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
