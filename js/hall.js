// window.onload = () => {
// On Title Hover
let onHover = document.getElementById("nav-hall");
onHover.classList.add("onHover");

//On Toggle Menu
let menu = document.querySelectorAll("#menu-icon");
let toggle = document.querySelector(".toggle-menu");
for (let m of menu) {
  m.addEventListener("click", () => {
    toggle.classList.toggle("active");
    document.body.classList.toggle("fixed");
    m.classList.toggle("bx-menu");
    m.classList.toggle("bx-x");
  });
}

 // Email effect 
 let email=document.querySelector(".footer-email");
 let eplace=document.querySelector(".place-email");
 email.addEventListener("focus",()=>{
   eplace.classList.add("act-e");
 });
 email.addEventListener("focusout",()=>{
   eplace.classList.remove("act-e");
 });


//Hall effect
let x = window.innerWidth;
if (x > 768) {
  let hallEffect = document.querySelectorAll(".hall-item");
  hallEffect[2].classList.add("active-hall");
  for (let i = 0; i < hallEffect.length; i++) {
    hallEffect[i].addEventListener("click", () => {
      if (hallEffect[i].classList.contains("active-hall")) {
        hallEffect[i].classList.remove("active-hall");
      } else {
        for (let j = 0; j < hallEffect.length; j++) {
          if (i !== j && hallEffect[j].classList.contains("active-hall")) {
            hallEffect[j].classList.remove("active-hall");
          }
        }
        hallEffect[i].classList.add("active-hall");
      }
    });
  }
}

//Hide nav
const nav = document.querySelector(".nav-bar");
const nav1 = document.querySelector(".nav-bar1");
if (window.pageYOffset >= 10) {
  nav.classList.remove("hide");
  nav1.classList.add("hide");
} else {
  nav.classList.add("hide");
  nav1.classList.remove("hide");
}
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    const scrollY = window.pageYOffset;
    if (scrollY >= 10) {
      nav.classList.remove("hide");
      nav1.classList.add("hide");
    } else {
      nav.classList.add("hide");
      nav1.classList.remove("hide");
    }
  }, 10)
);
// 2. debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// };
