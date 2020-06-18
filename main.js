const toggleSwitch = document.querySelector("input[name='theme']");
console.log(toggleSwitch.checked);

if (localStorage.getItem("theme1")) {
    document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme1")
    );
}

const toggleTheme = () => {
    let theme = "light";
    if (toggleSwitch.checked) {
        theme = "dark";
    } else theme = "light";
    addTransition();
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme1", theme);
};

const addTransition = () => {
    document.documentElement.classList.add("transition");

    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

toggleSwitch.addEventListener("change", toggleTheme);
