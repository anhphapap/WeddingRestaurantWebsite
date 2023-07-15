window.onload = () => {
  // On Title Hover
  let onHover = document.getElementById("nav-info");
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
