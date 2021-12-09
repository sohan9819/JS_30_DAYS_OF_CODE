const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.dataset.sizing);
    console.log(e.target.name);
    console.log(e.target.value);

    const suffix = e.target.dataset.sizing || "";
    const variable = e.target.name;
    const value = e.target.value;

    document.documentElement.style.setProperty(`--${variable}`, value + suffix);
  });
});
