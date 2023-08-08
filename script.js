// Script for navigation bar
document.getElementById("bar").addEventListener("click", () => {
  document.getElementById("navbar").classList.add("active");
  // document.getElementById('navbar').style.right="0px";
});
document.getElementById("close").addEventListener("click", function () {
  document.getElementById("navbar").classList.remove("active");
});

//script for product details page
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  MainImg.src = smallImg[0].src;
};
smallImg[1].addEventListener("click", () => {
  MainImg.src = smallImg[1].src;
  console.log("click");
});
function updateMainImage(img) {
    MainImg.src = img.src;
  }
  
  smallImg[2].onclick = function() {
    updateMainImage(this); 
  };
  
  smallImg[3].onclick = function() {
    updateMainImage(this);
  };