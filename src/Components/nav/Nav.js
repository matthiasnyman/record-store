

const menuShow = () => {
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector("#burger");

  nav.classList.toggle("nav-active");

  burger.classList.toggle("cross");
};

export default menuShow;
