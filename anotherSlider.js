// console.log("hello");

let items = document.querySelectorAll(".carousel .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".carousel .thumbnail .item");

let totalItemInCarousel = items.length;
let itemActive = 0;
let id = 0;

//next click event feature
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= totalItemInCarousel) {
    itemActive = 0;
  }

  showSlider();
};

//prev click event feature
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = totalItemInCarousel - 1;
  }
  showSlider();
};

//auto run next
id = setTimeout(() => {
  next.click();
}, 3000);

function showSlider() {
  //find & remove old `active'

  //find
  let itemActiveOld = document.querySelector(".carousel .list .item.active");
  let thumbnailItemActiveOld = document.querySelector(
    ".carousel .thumbnail .item.active"
  );
  //remove
  itemActiveOld.classList.remove("active");
  thumbnailItemActiveOld.classList.remove("active");

  //assign 'active' to new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  //clear previuos id
  clearTimeout(id);
  id = setTimeout(() => {
    next.click();
  }, 3000);
}

//click thumbnail & displayed that image feature
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
