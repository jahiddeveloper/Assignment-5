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