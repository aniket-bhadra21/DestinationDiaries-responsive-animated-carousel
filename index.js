// selections
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");

let thumbnailDom = document.querySelector(".carousel .thumbnail");

// console.log(listItemDom)

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let timeRunning = 3000;
let runTimeout;

//auto next
let timeAutoNext = 4500;
let runAutoRun;

runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  // console.log(itemSlider, itemSlider[0])
  // console.log(listItemDom,thumbnailDom)
  // console.log(itemSlider,itemThumbnail)

  //moving the item
  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);

    let thumbnailPositionLastItem = itemThumbnail.length - 1;

    thumbnailDom.prepend(itemThumbnail[thumbnailPositionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  //auto next
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
