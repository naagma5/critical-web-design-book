



// 2
document.getElementById("#ele2").addEventListener("click", function () {
  if (this.src.includes("BetterHelp.svg")){
    this.src = "assets/img/better_hellp.png";
  } else {
    this.src = "assets/img/BetterHelp.svg";
  }
});

// 3
let ele3 = document.querySelector("#ele3");
ele3.addEventListener("click", function () {
  if (this.src.includes("BetterHelp.svg")){
    this.src = "assets/img/better_hellp.png";
  } else {
    this.src = "assets/img/BetterHelp.svg";
  }
});

// 4
let ele4 = document.querySelector("#ele4");
ele4.addEventListener("mouseover", function () {
  this.src = "assets/img/better_hellp.png";
});
ele4.addEventListener("mouseout", function () {
  this.src = "assets/img/BetterHelp.svg";
});

// 5
let ele5 = document.querySelector("#ele5");
ele5.addEventListener("mouseover", function () {
  this.style.backgroundImage = "url(assets/img/better_hellp.png)";
});
ele5.addEventListener("mouseout", function () {
  this.style.backgroundImage = "url(assets/img/BetterHelp.svg)";
});


