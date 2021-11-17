
// Bouttons plus / moins
var plus_btn = document.querySelectorAll(".plus-btn")
var minus_btn = document.querySelectorAll(".minus-btn")
var span = document.querySelector(".span")


for (let i = 0; i < plus_btn.length; i++) {
  plus_btn[i].addEventListener("click", function () {
    if (plus_btn[i].nextElementSibling.innerHTML < 10)
      plus_btn[i].nextElementSibling.innerHTML++;
      totalfinal()
      soustotal1()
  });
}

for (let i = 0; i < minus_btn.length; i++) {
    minus_btn[i].addEventListener("click", function () {
      if (minus_btn[i].previousElementSibling.innerHTML > 0)
        minus_btn[i].previousElementSibling.innerHTML--;
        totalfinal()
        soustotal1()
    });
  }

// -----------------------


// heart

(function(){
    let heart = document.getElementById('heart');

    heart.addEventListener('click' , 
    function(){
        heart.classList.toggle('red');
        
    });
}) ();


// (function(){
//   let heart2 = document.querySelector('.heart');

//   heart2.addEventListener('click' , 
//   function(){
//       heart2.classList.toggle('red');
      
//   });
// }) ();





// -----------




// remove element 

var supp=document.querySelectorAll('.btnsupp')
for(let sup of supp){
  sup.addEventListener('click', function(){
      sup.parentElement.parentElement.parentElement.remove()
      totalfinal()
      soustotal1()
  })
}

// -------------


// function Tootal(){
//   var qtn = document.querySelectorAll('.quantity');
//   var pu = document.querySelectorAll('.pu');
//   var tot = document.querySelector('#totalfinalfinal');
//   var result = 0;

//   for(let i = 0 ; i<qtn.length ; i++){
//     result = result + (Number(qtn[i].innerHTML) * Number(pu[i].innerHTML))
//   }
// tot.innerHTML = result;

// }
// console.log(Tootal)













function totalfinal(){

  var quantity= document.querySelectorAll('.span')
  var priceunitaire= document.querySelectorAll('.price')
  var total=document.querySelector('#total')

var resultat=0

for (let i=0; i< quantity.length; i++){

  resultat=resultat+(Number(quantity[i].innerHTML) *  Number(priceunitaire[i].innerHTML) )
}

total.innerHTML=resultat



}


// function soustotal1(){
//   var qtn = Document.getElementById('#qtn1')
//   var pu  = document.getElementsById('#price1')
//   var soustt = document.getElementById('#soustotal1')

//   if( var resultsoustt1 = 0 ){

  
//     resultsoustt1 = resultsoustt1+(Number(qtn[i].innerHTML) * Number(pu[i].innerHTML))}
  
  

//   soustotal1.innerHTML = resultsoustt1
// }




