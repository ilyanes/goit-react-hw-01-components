const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  let color = `rgb(${randomInterval(0, 255)},${randomInterval(
    0,
    255
  )},${randomInterval(0, 255)})`;
  return color;
};

export default randomColor;
