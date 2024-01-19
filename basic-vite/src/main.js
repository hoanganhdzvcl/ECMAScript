import HomePage from "./pages/home";

const render = (container,components) => {
    document.querySelector(container).innerHTML = components();
}
render("#app",HomePage);