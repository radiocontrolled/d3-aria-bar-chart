const isLandscape = () =>
  window.innerHeight > window.innerWidth ? false : true;

export default function getDimensions(parent) {
  const WIDTH = document.getElementsByClassName(parent.replace(/\./, ''))[0]
    .offsetWidth;
  
  let HEIGHT; 

  if (isLandscape()) {
    HEIGHT = WIDTH * 0.4;
  } else {
    HEIGHT = WIDTH * 1.25;
  }

  const MARGIN = 40;
  const MARGINS = { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN };

  return {
    WIDTH,
    HEIGHT,
    MARGINS
  };
}
