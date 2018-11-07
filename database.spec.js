// var pgp = require('pg-promise')(/*option*/);


// var cn = {
// host: 'localhost',
// port: 5432,
// database: 'dvdrental',
// user: 'postgres',
// password: 'Erlan90081'
// };
// var db = pgp(cn);

// db.one('Select * from film where film_id = 135').then(result=>{
//     console.log(result.rental_rate);
// }).catch(error=>{
//     console.log(error);
// });

// db.one('select title, replacement_cost from film where film_id=234').then(result=>{
//     console.log(result.title + " "+result.replacement_cost);
// }).catch(error=>{
//     console.log(error);
// })

// db.one(`select first_name ||' '|| last_name as "Fullname" from customer where customer_id = 30`).then(result=>{
//     console.log(result.Fullname);
// }).catch(error=>{
//     console.log(error);
// })

// db.one(`select sum(amount) from payment`).then(result=>{
//     console.log(result.sum);
// }).catch(error=>{
//     console.log(error)
// })

// db.one(`select first_name ||' '|| last_name as fullname from customer where customer_id = (select customer_id from payment
// group by customer_id order by sum(amount) desc limit 1);`).then(result=>{
//     console.log(result.fullname);
// }).catch(error=>{
//     console.log(error)
// })

// db.any(`select first_name||' ' ||last_name as fullname from customer where customer_id in(3,4,5,6,7);`).then(result=>{
//     result.forEach(element => {
//         console.log(element.fullname);
//     });
// }).catch(error=>{
//     console.log(error);
// })


// var arr = [];
// db.any(`select title from film where title LIKE 'N%'`).then(result=>{
    
//        arr = result; 
//     }).catch(error=>{
//     console.log(error);
// }).then(()=>{
// console.log()
// })




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
