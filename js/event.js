window.onload = () => {
  // On Title Hover
  let onHover = document.getElementById("nav-event");
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

  //Data event
  let listEvent = document.querySelector(".list-event");
  fetch("../data/event.json")
    .then((res) => res.json())
    .then((data) => {
      for (let e of data) {
        let event = `<div class="event-item">
    <div class="event-content">
        <h1 class="event-title">${e.title}</h1>
        <div class="event-line"></div>
        <p class="event-disc">${e.description}</p>
    </div>
    <div class="event-img">
        <div>
            <img src="${e.image}" alt="" class="event-image">
        </div>
    </div>
</div>`;
        listEvent.insertAdjacentHTML("beforeend", event);
      }
    });
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
};
