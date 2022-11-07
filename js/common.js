const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const thumUp = document.querySelector(".actions li button .fa-thumbs-up");
const thumDown = document.querySelector(".actions li button .fa-thumbs-down");

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})

thumUp.addEventListener('click', () => {
  thumUp.classList.toggle('active');
  thumDown.classList.remove('active');
})
thumDown.addEventListener('click', () => {
  thumDown.classList.toggle('active');
  thumUp.classList.remove('active');
})

// upDown.on("click",function () {
//   if (upDown.hasClass("active")) {
//     upDown.removeClass("active")
//   }else {
//     upDown.addClass("active")
//   }
// })

// upDown.each(function functionName() {
//
// })
