// product section

// function display(products) {
//   products.forEach((product) => {
//       console.log(product)
//  document.getElementById("gift-row").innerHTML += `<div class="card">
//  <p class="card-title" id="product1-name">${product.detail}</p>
//  <p class="card-text" id="product1-price">$ ${product.price}</p>
//   <img src="./images/${product.photoUri}" class="card-img-top" alt="...">
//   <a href="#shopping-cart"><button class="btn btn-primary" id="productBtn">Add to cart</button></a>
//   </div>`;
//   });
// }

function displayKids(products) {
  products.forEach((product) => {
      console.log(product)
 document.getElementById("gift-row-kids").innerHTML += `<div class="card">
 <img src="./images/${product.photoUri}" class="card-img-top" alt="...">
 <p class="card-title" id="product1-name">${product.detail}</p>
 <p class="card-text" id="product1-price">$ ${product.price}</p>
  <a href="#shopping-cart"><button class="btn btn-primary" id="productBtn">Add to cart</button></a>
  </div>`;
  });
}

function displayWomen(products) {
  products.forEach((product) => {
      console.log(product)
 document.getElementById("gift-row-women").innerHTML += `<div class="card">
 <img src="./images/${product.photoUri}" class="card-img-top" alt="...">
 <p class="card-title" id="product1-name">${product.detail}</p>
 <p class="card-text" id="product1-price">$ ${product.price}</p>
  <a href="#shopping-cart"><button class="btn btn-primary" id="productBtn">Add to cart</button></a>
  </div>`;
  });
}
function displayMen(products) {
  products.forEach((product) => {
      console.log(product)
 document.getElementById("gift-row-men").innerHTML += `<div class="card">
 <img src="./images/${product.photoUri}" class="card-img-top" alt="...">
 <p class="card-title" id="product1-name">${product.detail}</p>
 <p class="card-text" id="product1-price">$ ${product.price}</p>
  <a href="#shopping-cart"><button class="btn btn-primary" id="productBtn">Add to cart</button></a>
  </div>`;
  });
}

// function fetchProducts(){
//   fetch("http://localhost:4005/api/v1/products",{   
//       method: "GET",
//       node:'cors',
//       credentials:'same-origin'
//      })
//       .then((response) => response.json())
//       .then((data) => {
//         const products = data;
//         display(products);
//         console.log("products from server", products);
//       })
//       .catch((error) => console.error(error.message));
// }

function fetchMenProducts(){
fetch("http://localhost:4005/api/v1/products/men",{   
    method: "GET",
    node:'cors',
    credentials:'same-origin'
   })
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      displayMen(products);
      console.log("products from server", products);
    })
    .catch((error) => console.error(error.message));
}

function fetchWomenProducts(){
fetch("http://localhost:4005/api/v1/products/women",{   
    method: "GET",
    node:'cors',
    credentials:'same-origin'
   })
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      displayWomen(products);
      console.log("products from server", products);
    })
    .catch((error) => console.error(error.message));
}
function fetchKidsProducts(){
fetch("http://localhost:4005/api/v1/products/kids",{   
    method: "GET",
    node:'cors',
    credentials:'same-origin'
   })
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      displayKids(products);
      console.log("products from server", products);
    })
    .catch((error) => console.error(error.message));
}

fetchKidsProducts();
fetchWomenProducts();
fetchMenProducts();

// add to cart

const selectedProductName=document.querySelector('#product1-name').textContent;
const selectedProductPrice=document.querySelector('#product1-price').textContent;
const selectedProductBtn=document.querySelector('#product1Btn')
const checkoutButton=document.querySelector('#checkoutButton')
console.log(selectedProductName)


let subtotal = 0;


// const calculateTax = subtotal => {
//     const tax = subtotal * 0.13;
//     const formattedTax = tax.toFixed(2);
//     return formattedTax;
//   };
  
  const calculateTotal = subtotal => {
    // const tax = calculateTax(subtotal);
    const total = parseFloat(subtotal)
    const formattedTotal = total
    return formattedTotal;
  };

const addToCart =()=>{
    const itemsListUl =document.querySelector('#items-list-ul')
    const newList = document.createElement('li')
    const newListName = document.createElement('p')
    const newListPrice = document.createElement('p')
    const newListDeleteBtn = document.createElement('button')
   
   

// appened

    itemsListUl.appendChild(newList) //nesting list to the ul
    newList.appendChild(newListName) // nesting span to the list
    newList.appendChild(newListPrice) // nesting span to the list
    newList.appendChild(newListDeleteBtn) // nesting span to the list
   


    
// add bootstrap class to list and button,span dont need this
newList.classList.add('list-group-item', 'item-list')
newListDeleteBtn.classList.add('btn','btn-danger')
newListDeleteBtn.textContent='delete'
newListName.textContent=selectedProductName;
newListPrice.textContent=selectedProductPrice;

console.log(typeof(selectedProductPrice))
parseInt(selectedProductPrice)
subtotal = parseInt(subtotal) + parseInt(selectedProductPrice);
console.log(subtotal)
const formattedSubtotal = subtotal
// const tax = calculateTax(subtotal);
const total = calculateTotal(subtotal);
console.log(total)
// console.log(formattedSubtotal)
document.getElementById("totalAmount").innerHTML=total;


const deleteTask = ()=>{
    newListDeleteBtn.addEventListener('click',deleteTask)
    newList.remove();
    subtotal = parseInt(total) - parseInt(selectedProductPrice);
    document.getElementById("totalAmount").innerHTML=subtotal;
    console.log(total)
    // newList.remove();
}
newListDeleteBtn.addEventListener('click',deleteTask)
}

selectedProductBtn.addEventListener('click',addToCart)

