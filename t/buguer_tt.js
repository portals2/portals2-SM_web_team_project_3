const burger_t = document.querySelector(".burger_t");
const nav_t = document.querySelector(".nav-links_t");
const navlinks_t = document.querySelectorAll(".nav-links_t li");


const navAnimation_t = () => {
  // forEach는 for문과 같다.
  navlinks_t.forEach((link, index) => {
    // 애니메이션이 있을 때
    if (link.style.animation) {
      // 애니메이션 비움
      link.style.animation = "";
    } else {
      // 애니메이션 없을 때 애니메이션을 추가
      // 딜레이 간격을 줘서 li가 하나씩 차례대로 나타나도록 설정
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
};
const handleNav_t = () => {
  nav_t.classList.toggle("nav-active_t");

  //nav Animation
  navAnimation_t();

  //burger Animation
  burger_t.classList.toggle("toggle");
};
const navSlide_t = () => {
  burger_t.addEventListener("click", handleNav_t);
};

const init_t = () => {
  navSlide_t();
};

init_t();