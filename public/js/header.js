//(미디어쿼리)햄버거 버튼 누르면 메뉴 하단으로 떨어짐
const toggleBtn = document.querySelector('.navbar-toggle');
const menu = document.querySelector(".navbar-list");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-active');
});

//메뉴 클릭시 클릭한 탭으로 바로 이동
function goToScroll(name) {
  const location = document.querySelector("." + name).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
    menu.classList.toggle("nav-active");
}


//무료체험 버튼 클릭시 하단 contact로 이동
const eventBtn = document.querySelector(".cta");
const contact = document.querySelector(".contact").offsetTop;

eventBtn.addEventListener('click', () => {
  window.scrollTo({ top: contact, behavior: "smooth" });
  
})

