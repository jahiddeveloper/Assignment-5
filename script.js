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

// Cart -1

document.getElementById("phone-btn")
.addEventListener("click", function() {
  
  const coinsUncount = document.getElementById("uncount")
  const coinsUncountInnerText = parseInt(coinsUncount.innerText)
  const freeCoins = 20;

  if(coinsUncountInnerText > 0) {
    alert("Calling National Emergency Service 999..")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Police 999")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Fire Service 999")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Ambulance 1994-999999")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Women & Child Helpline 109")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Anti-Corruption 106")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Callng Electricity Outage 16216")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Brac 16445")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
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
    alert("Calling Bangladesh Railway 163")
    
  }
  else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে 20টি কয়েন লাগবে।")
    return
  }
  const totalcoins = coinsUncountInnerText - freeCoins;

  document.getElementById("uncount").innerText = totalcoins
}) 



// const div = document.createElement("div");
//     div.classList.add("history-container");
//     div.innerHTML = `<div id="history-container" class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg shadow-lg mt-2">
                

//                 <div>
//                     <h1 class="text-[18px] font-semibold">জাতীয় জরুরি সেবা</h1>
//                     <h3>999</h3>
//                 </div>

//                 <div>
//                     <p>10:59:59 AM</p>
//                 </div>


//             </div>`;

//     history.appendChild(div);





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


document.getElementById("phone-btn").addEventListener("click", function() {
    addToHistory("জাতীয় জরুরি সেবা", 999)
});


document.getElementById("p-btn").addEventListener("click", function() {
  addToHistory("পুলিশ", 999);
});


document.getElementById("h-btn").addEventListener("click", function() {
  addToHistory("ফায়ার সার্ভিস", 999);
});


document.getElementById("o-btn").addEventListener("click", function() {
  addToHistory("অ্যাম্বুলেন্স", "1994-999999");
});


document.getElementById("n-btn").addEventListener("click", function() {
  addToHistory("নারী ও শিশু সহায়তা", 109);
});


document.getElementById("e-btn").addEventListener("click", function() {
  addToHistory("দুদক", 106);
});


document.getElementById("call-btn").addEventListener("click", function() {
  addToHistory("বিদ্যুৎ বিভ্রাট", 16216);
});


document.getElementById("mobile-btn").addEventListener("click", function() {
  addToHistory("ব্র্যাক", 16445);
});


document.getElementById("telephone-btn").addEventListener("click", function() {
  addToHistory("বাংলাদেশ রেলওয়ে", 163);
});
