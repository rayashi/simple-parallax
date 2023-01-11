const zoomOut = ({ banner, title, button }) => {
  banner.style.backgroundSize = "150%";
  title.style.opacity = 0;
  title.style.translate = "0 -40px";
  title.style.scale = "0.9";
  button.style.opacity = 0;
  button.style.translate = "0 -30px";
  button.style.scale = "0.9";
};

const zoomIn = ({ banner, title, button }) => {
  banner.style.backgroundSize = "180%";
  title.style.opacity = 1;
  title.style.translate = 0;
  title.style.scale = 1;
  button.style.opacity = 1;
  button.style.translate = 0;
  button.style.scale = 1;
};

const onScroll = (event) => {
  const title = document.getElementById("title");
  const banner = document.getElementById("banner");
  const button = document.getElementById("button");
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 50) {
    zoomOut({ title, banner, button });
  } else {
    zoomIn({ title, banner, button });
  }
};

document.addEventListener("scroll", onScroll);
