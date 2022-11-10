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
