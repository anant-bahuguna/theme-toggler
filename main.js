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
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme1", theme);
};

toggleSwitch.addEventListener("change", toggleTheme);
