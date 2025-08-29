// Love icon ++ ;

const navbarCount = document.querySelector(".count");
const loveIcons = document.querySelectorAll(".love-icon")

let count = 0;

for(let i = 0; i < loveIcons.length; i++) {
  
  loveIcons[i].addEventListener('click', function() {
    count++

    navbarCount.innerText = count;
  })
}



// Cart -1

document.getElementById("phone-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("সার্বজনীন \n 999")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// Cart -2

document.getElementById("p-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("পুলিশ \n 999")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// Cart - 3

document.getElementById("h-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("ফায়ার সার্ভিস \n 999")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// Cart - 4

document.getElementById("o-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("অ্যাম্বুলেন্স \n 1994-999999")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// Cart - 5

document.getElementById("n-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("নারী ও শিশু সহায়তা \n 109")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// Cart - 6

document.getElementById("e-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("দুদক \n 106")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// Cart - 7

document.getElementById("call-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("বিদ্যুৎ বিভ্রাট \n 16216")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// cart - 8

document.getElementById("mobile-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("ব্র্যাক \n 16445")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 

// cart - 9

document.getElementById("telephone-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("বাংলাদেশ রেলওয়ে \n 163")
    
  }
  else {
    alert("Bye everyOne")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 
