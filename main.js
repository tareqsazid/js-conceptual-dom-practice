
// first card 
let serial = 0;
document.getElementById('first-card').addEventListener('click', function(){
    // console.log(e.target)
    // get date a 
    serial +=1;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
// console.log(productName, productPrice, productQuantity);
const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

// show the data
displayData(productName, productPrice, productQuantity, priceTotal);
document.getElementById('first-card').setAttribute('disabled', true);
disabledButton('first-card')
});

// using Object event 
document.getElementById('second-card').addEventListener('click',function(e){
    serial +=1;
    // console.log(e.target.parentNode.parentNode.children[0].innerText);

    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
 displayData(pName, pPrice, pQuantity, sumTotal);
 disabledButton('second-card')

})

document.getElementById('third-card').addEventListener('click', function(){
    // console.log(e.target)
    // get date a 
    serial +=1;
    const productName = document.getElementById('third-title').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;
// console.log(productName, productPrice, productQuantity);
const priceTotal = parseInt(productPrice) - parseInt(productQuantity);


// show the data
displayData(productName, productPrice, productQuantity, priceTotal)

});

// commom functio to displayData


// last card design 
document.getElementById('final-card').addEventListener('click',function(){
 const productName = document.getElementById('last-title').innerText;
 const productPrice = document.getElementById('first-input').value;
 const productQuantity = document.getElementById('last-input').value;
 
 if (productPrice == '' || productQuantity =="" || productPrice < 0 || productQuantity <0 ){
    return alert ('please enter any valid number')

 }

const total = parseInt(productPrice) / parseInt(productQuantity);

displayData(productName, productPrice, productQuantity, total)
disabledButton('final-card')
});

function displayData(nameOfP, priceOfP, quantityOfp, resultP){
    const container = document.getElementById('table-container')

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    
    `;
    container.appendChild(tr);
}

function disabledButton(id){
    document.getElementById('id').setAttribute('disabled', true)
}