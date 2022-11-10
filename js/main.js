(function () {
  let url = window.location.href;
  let filename = url.split("/").pop();
  let allfiles = document.querySelectorAll("nav ul li");
  for (let index = 0; index < allfiles.length; index++) {
    let openFile = allfiles[index].innerHTML;
    openFile = openFile.split('"');
    if (filename == openFile[1]) {
      document
        .querySelector("nav ul li:nth-child(" + [index + 1] + ")")
        .setAttribute("class", "currentPage");
    }
  }
  //   document.querySelector("nav ul li").setAttribute("class", "currentPage");
})();

document.getElementById("myTestEvent").addEventListener("click", function () {
  console.info("hi");
});

// document.querySelector(".red").addEventListener("click", function () {
//   document.querySelector("body").setAttribute("class", "redBack");
// });
// document.querySelector(".green").addEventListener("click", function () {
//   document.querySelector("body").setAttribute("class", "greenBack");
// });
// document.querySelector(".blue").addEventListener("click", function () {
//   document.querySelector("body").setAttribute("class", "blueBack");
// });
// document.querySelector(".reset").addEventListener("click", function () {
//   document.querySelector("body").setAttribute("class", "default");
// });

// Reworked Colour Changer.
let colourButtons = document.querySelectorAll(".colPicker");
for (let i = 0; i < colourButtons.length; i++) {
  colourButtons[i].addEventListener("click", chgColour);
}

function chgColour(ev) {
  let colourPicked = ev.target.classList[0] + "Back";
  document.querySelector("body").setAttribute("class", colourPicked);
}

let imageAr = [
  "images/view1.jpg",
  "images/view2.jpg",
  "images/view3.jpg",
  "images/view4.jpg",
  "images/view5.jpg",
  "images/view6.jpg",
];
let imgCounter = 0;
setInterval(chgImage, 5000);
function chgImage() {
  document.getElementById("myImages").setAttribute("src", imageAr[imgCounter]);
  imgCounter += 1;
  if (imgCounter > imageAr.length - 1) {
    imgCounter = 0;
  }
}
document.getElementById("myImages").addEventListener("click", function () {
  chgImage();
});
