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



const history = [];

function clearHistory() {
    const historyBox = document.getElementById("history"); 
    historyBox.innerHTML = "";
}
document.getElementById("clear-btn").addEventListener("click", function() {
    clearHistory();
});


// Cart -1

document.getElementById("phone-btn")
.addEventListener("click", function() {

    const coinsUncount = document.getElementById("uncount")
    const coinsUncountInnerText = parseInt(coinsUncount.innerText)
    const freeCoins = 20;

    if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
    }

    alert("Calling National Emergency Service 999..")

    const totalcoins = coinsUncountInnerText - freeCoins;
    coinsUncount.innerText = totalcoins;

    addToHistory("জাতীয় জরুরি সেবা", 999);

});


// Cart -2

document.getElementById("p-btn")
.addEventListener("click", function() {
  
    const coinsUncount = document.getElementById("uncount")
    const coinsUncountInnerText = parseInt(coinsUncount.innerText)
    const freeCoins = 20;

    if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
    }

    alert("Calling Police 999..")

    const totalcoins = coinsUncountInnerText - freeCoins;
    document.getElementById("uncount").innerText = totalcoins

    addToHistory("পুলিশ", 999);
}); 

// Cart - 3

document.getElementById("h-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
    }

    alert("Calling Fire Service 999")
    
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("ফায়ার সার্ভিস", 999);
}) 

// Cart - 4

document.getElementById("o-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
  }

    alert("Calling Ambulance 1994-999999")

  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("অ্যাম্বুলেন্স", "1994-999999");
}) 

// Cart - 5

document.getElementById("n-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
  }

    alert("Calling Women & Child Helpline 109")

  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("নারী ও শিশু সহায়তা", 109)
}) 

// Cart - 6

document.getElementById("e-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
  }

    alert("Calling Anti-Corruption 106")

  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("দুদক", 106)
}) 

// Cart - 7

document.getElementById("call-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
  }

    alert("Callng Electricity Outage 16216")

  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("বিদ্যুৎ বিভ্রাট", 16216)
}) 

// cart - 8

document.getElementById("mobile-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
  }

    alert("Calling Brac 16445")

  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("ব্র্যাক", 16445)
}) 

// cart - 9

document.getElementById("telephone-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText < freeCoins) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
        return;
  }

    alert("Calling Bangladesh Railway 163")

  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins

  addToHistory("বাংলাদেশ রেলওয়ে", 163)
}) 



const historyBox = document.getElementById("history");
function addToHistory(name, hotline) {

    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "items-center", "bg-[#fafafa]", "p-2", "rounded-lg", "mt-3", "shadow-lg");

    div.innerHTML = `
        <div>
            <h1 class="font-semibold">${name}</h1>
            <h3>${hotline}</h3>
        </div>
        <div>
            <p>${new Date().toLocaleTimeString()}</p>
        </div>
    `;

    historyBox.appendChild(div)
}


const copyPlassPlass = document.getElementById("plass");
let copyCount = 0;

const copyButtons = document.querySelectorAll(".copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function() {
        
      const hotline = this.parentElement.querySelector("p.font-bold").innerText;

      navigator.clipboard.writeText(hotline).then(() => {
      
    });

      copyCount++;
      copyPlassPlass.innerText = copyCount;
    });
}



