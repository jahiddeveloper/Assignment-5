//   const data = {
//     name: "জাতীয় জরুরি সেবা",
//     hotline: 999,
//     date: new Date().toLocaleTimeString()
//   }

//   history.push(data)

//   console.log(history)




// document.getElementById("history")
// .addEventListener("click", function() {
  
//   const historyContainer = document.getElementById("history-container")

//   for(const data of history) {
//     const div = document.createElement("div")
//     div.innerHTML = `
//       <div class="flex justify-between items-center bg-[#fafafa] p-4 rounded-lg shadow-lg mt-2">
                

//                 <div>
//                     <h1 class="text-[18px] font-semibold">${data.name}</h1>
//                     <h3>${data.hotline}</h3>
//                 </div>

//                 <div>
//                     <p>${data.date}</p>
//                 </div>


//                 </div>
//     `

//     historyContainer.appendChild(div)


//   }
// })