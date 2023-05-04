const getRandomNumber = () => {
  const min = Math.ceil(window.prompt("Enter min number"));
  const max = Math.floor(window.prompt("Enter max number"));

  if (isNaN(min) || isNaN(max)) throw "Invalid numbers";

  return Math.round(Math.random() * (max - min + 1) + min);
};

alert(getRandomNumber());
