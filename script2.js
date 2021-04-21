
let products = 
  [
     {
    name: "Shoes",
    brand:"Nike",
    description: "basketball shoes",
    price: "Php 2029"
     },
     {
        name: "Bag",
        brand:"Herschel",
        description: "Backpack",
        price: "Php 4290"
         },
      {
        name: "Speaker",
        brand:"JBL",
        description: "Bluetooth Speaker",
        price: "Php 8600"
      },
      {
        name: "Cap",
        brand:"Polo Ralph Lauren",
        description: "Polo Ralph Lauren Cap",
        price: "Php 2300"
         },
      {
        name: "Sunglasses",
        brand:"Ray-Ban",
        description: "Ray-ban Shades",
         price: "Php 5500"
        },
       {
        name: "Headphones",
        brand:"Sony",
        description: "Noise Cancellation Headphones",
        price: "Php 2900"
        },
        {
            name: "Watch",
            brand:"Timex",
            description: "Timex Leather Strap Watch",
            price: "Php 6937"
             },
        {
            name: "Smart Phone",
            brand:"Xiaomi",
            description: "Xiaomi Mi 10T Pro",
            price: "Php 24990"
             }
        
     ];
    
     

     let carts = document.querySelectorAll('.btn');
    

     for (let i=0; i < carts.length; i++){
        carts[i].addEventListener('click', () =>{
          cartNumbers(products[i]);})
     };

     function cartNumbers(product){
      
       let productNumbers = localStorage.getItem('cartNumbers');
       productNumbers = parseInt(productNumbers);
       if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
       }else{
       localStorage.setItem('cartNumbers',1);
       }

       setItem(product);

     }

     function setItem(product){
       console.log("Inside of SetItems function");
       console.log("My product is:", product);
     }

     function displayCart(){
       let cartItems = localStorage.getItem("productInCart");
       cartItems = JSON.parse(cartItems);
       let productContainer = document.querySelector ('.cartbtn');

       if (cartItems && productContainer){
         console.log("running");
       }
     }
    


