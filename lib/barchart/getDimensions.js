export default function getDimensions(parent) {
  const WIDTH = document.getElementsByClassName(parent.replace(/\./, ''))[0]
    .offsetWidth;
  // const MARGIN = 30;
  // const MARGINS = { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN };
  // const PADDING = 0.8;

  return {
    WIDTH,
    // MARGIN,
    // MARGINS,
    // PADDING,
  };
}
