window.onload = () => {
    // On Title Hover
    let onHover = document.getElementById("nav-sale");
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
  
    //Active booking
    let booking = document.querySelectorAll("#booking");
    let adv = document.querySelector(".advice");
    let advice = document.querySelector(".wrapper-advice");
    let xIcon = document.querySelector("#x-icon");
    advice.addEventListener("click", (e) => {
      if (!adv.contains(e.target) && !e.target.matches(".advice")) {
        advice.classList.remove("active-advice");
      }
    });
    for (let b of booking) {
      b.addEventListener("click", () => {
        advice.classList.add("active-advice");
      });
      xIcon.addEventListener("click", () => {
        advice.classList.remove("active-advice");
      });
    }
  
    //Input effect
    let wrap = document.querySelectorAll(".wrapper-input");
    for (let em of wrap) {
      let email = em.querySelector(".input");
      let eplace = em.querySelector(".place-input");
      email.addEventListener("focus", () => {
        eplace.classList.add("active-input");
      });
  
      // email.addEventListener("focusout",()=>{
      //   eplace.classList.remove("active-input");
      // });
    }
    //Hide nav & go top
    const nav = document.querySelector(".nav-bar");
    const nav1 = document.querySelector(".nav-bar1");
    const goTop=document.querySelector(".go-top");
    goTop.addEventListener("click",()=>{
      document.body.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
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
        if (scrollY >= 400)
        {
          goTop.classList.remove("hide");
        }
        else
        {
          goTop.classList.add("hide");
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
  };
  
  $(window).ready(()=>{
    $(".select").focus(function(){
      $(".select").parent().css("color","var(--text)");
      $(this).parent().css("color","var(--text2)");
    })
  });