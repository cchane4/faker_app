let faker = require('faker'); 


 let production = () => {  
     for (var i = 0; i < 10; i++){ 
    console.log(faker.commerce.price() + " - " + faker.commerce.productName());
     } 
} 

production(); 
