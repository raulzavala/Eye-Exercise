const balls = document.getElementsByClassName("ball");
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let j = 0; j < balls.length; j++) {
    balls[j].style.left = x;
    balls[j].style.top = y;
    balls[j].transform = "translate(-" + x + ",-" + y + ")";
  }
};
