var plus = document.querySelectorAll('.plus-btn')
var minus = document.querySelectorAll('.minus-btn')

console.log(plus)
// increment 

for (let i=0; i< plus.length ; i++){

    plus[i].addEventListener('click', function(){

        plus[i].nextElementSibling.innerHTML++
        TOTAL()
    })
}

// decrement 

for( let i=0; i<minus.length;i++){





    minus[i].addEventListener('click',function () {


        if (minus[i].previousElementSibling.innerHTML>0)
        minus[i].previousElementSibling.innerHTML--
        TOTAL()
    })
}

// like 


var hearts =document.querySelectorAll('.heart')


for (let heart of hearts ){
console.log(heart)
    heart.addEventListener('click', function(){


        heart.classList.toggle('style')
    })

}

// remove 

var supp=document.querySelectorAll('.btnsupp')

for(let sup of supp){
    sup.addEventListener('click', function(){
        sup.parentElement.parentElement.parentElement.remove()
        TOTAL()
    })
}


// total 


function TOTAL(){

    var quantity= document.querySelectorAll('.span')
    var priceunitaire= document.querySelectorAll('.price')
    var total=document.querySelector('#total')

var resultat=0

for (let i=0; i< quantity.length; i++){

    resultat=resultat+(Number(quantity[i].innerHTML) *  Number(priceunitaire[i].innerHTML) )
}

total.innerHTML=resultat



}

