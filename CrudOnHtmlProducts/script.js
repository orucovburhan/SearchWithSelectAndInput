const products = [
    ["Lenovo IdeaPad 5 Laptop", 799.99, "Ultrabook with AMD Ryzen 5 and 15.6\" display", 2023],
    ["Samsung Galaxy S24 Smartphone", 999.99, "Flagship phone with AMOLED display and triple camera", 2024],
    ["Sony WH-1000XM5 Headphones", 349.99, "Wireless noise-canceling headphones", 2023],
    ["LG OLED C3 TV", 1299.00, "55-inch 4K OLED smart TV", 2024],
    ["PlayStation 5 Console", 499.99, "Next-generation gaming console from Sony", 2020],
    ["Apple iPad Air Tablet", 599.00, "Slim tablet with M1 chip and Retina display", 2022],
    ["Garmin Venu 3 Smartwatch", 399.99, "Fitness smartwatch with GPS and heart rate monitor", 2023],
    ["Xiaomi Band 8 Fitness Tracker", 49.99, "Affordable activity tracker with AMOLED screen", 2023],
    ["Canon EOS R6 Camera", 2299.00, "Mirrorless camera with 20-MP sensor", 2021],
    ["Logitech G502 HERO Gaming Mouse", 89.99, "Wired mouse with adjustable DPI and RGB lighting", 2022]
  ];

// while(true){
//     let input = prompt('ADD,DELETE,SORT BY PRICE,SORT BY YEAR,CHANGE PRICE,SHOW')
//     if(input==='ADD'){
//         let name=prompt('Enter name')
//         let price=prompt('Enter price')
//         let description=prompt('Enter description')
//         let year=prompt('Enter year')
//         let newProduct=[name,price,description,year]
//         products.push(newProduct)
//     }
//     else if(input==="DELETE"){

//     }
//     else if(input==="SORT BY PRICE"){
        
//     }
//     else if(input==="SORT BY YEAR"){
        
//     }
//     else if(input==="CHANGE PRICE"){
        
//     }

//     else if(input==="SHOW"){
//         alert(products)
//     }


// }
// document.getElementById("submitBtn").addEventListener("click", function() {
//     const value = document.getElementById("username").value;
//     console.log("User entered:", value);
//   });

  const content = document.getElementById("content");

document.getElementById("Add").addEventListener("click", function() {
  content.innerHTML = `
  <h2>Add Product</h2>
  <input type="text" id="name" placeholder="Product name"><br>
  <input type="text" id="price" placeholder="Product price"><br>
  <input type="text" id="description" placeholder="Product description"><br>
  <input type="text" id="year" placeholder="Product year"><br>
  <button id="submitBtn">Submit</button>
  `;
document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let year = document.getElementById("year").value;
    let newProduct=[name,price,description,year]
    products.push(newProduct)
    content.innerHTML=`
  <h2>Add Product</h2>
  <input type="text" id="name" placeholder="Product name"><br>
  <input type="text" id="price" placeholder="Product price"><br>
  <input type="text" id="description" placeholder="Product description"><br>
  <input type="text" id="year" placeholder="Product year"><br>
  <button id="submitBtn">Add</button>
  <p style="color: green;">Succesfully added</p>
  `;
  });

});
document.getElementById("Delete").addEventListener("click", function() {
    content.innerHTML = `
    <h2>Delete Product</h2>
    <input type="text" id="name" placeholder="Product name"><br>
    <button id="submitBtn">Delete</button>
    `;
    document.getElementById("submitBtn").addEventListener("click", function() {
        let name = document.getElementById("name").value;
        const index = products.findIndex(product => product[0] === name);
        products.splice(index,1)
        content.innerHTML = `
    <h2>Delete Product</h2>
    <input type="text" id="name" placeholder="Product name"><br>
    <button id="submitBtn">Delete</button>
    <p style="color: green;">Succesfully deleted</p>
    `;
    });
    
}); 

document.getElementById("Show").addEventListener("click", function() {
  content.innerHTML =products.join('<br><hr>');
});

document.getElementById("sortByPrice").addEventListener("click", function() {
    content.innerHTML = `
    <button id="Ascending">Ascending</button>
    <button id="Descending">Descending</button>
    `;
    document.getElementById("Ascending").addEventListener("click", function() {
        content.innerHTML = products.sort((a, b) => a[1] - b[1]).join('<br><hr>')//i took these tactic from stack overflow(sorting like this)
        
    }),
    document.getElementById("Descending").addEventListener("click", function() {
        content.innerHTML = products.sort((a, b) => b[1] - a[1]).join('<br><hr>')
    })
});

document.getElementById("sortByYear").addEventListener("click", function() {
    content.innerHTML = `
    <button id="Ascending">Ascending</button>
    <button id="Descending">Descending</button>
    `;
    document.getElementById("Ascending").addEventListener("click", function() {
        content.innerHTML = products.sort((a, b) => a[3] - b[3]).join('<br><hr>')
    }),
    document.getElementById("Descending").addEventListener("click", function() {
        content.innerHTML = products.sort((a, b) => b[3] - a[3]).join('<br><hr>')
    })
});

document.getElementById("changePrice").addEventListener("click", function() {
    content.innerHTML = `
    <h2>Change Price</h2>
    <input type="text" id="name" placeholder="Product name"><br>
    <input type="text" id="price" placeholder="New price"><br>
    <button id="submitBtn">Delete</button>
    `;
    document.getElementById("submitBtn").addEventListener("click", function() {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        const index = products.findIndex(product => product[0] === name);
        products[index][1]=price
        content.innerHTML = `
    <h2>Delete Product</h2>
    <input type="text" id="name" placeholder="Product name"><br>
    <input type="text" id="price" placeholder="New price"><br>
    <button id="submitBtn">Delete</button>
    <p style="color: green;">Succesfully changed</p>
    `;
    });
});

