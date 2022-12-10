const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const h1c = document.getElementsByClassName("h1");

button.addEventListener("click", function()
{
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    console.log(newColor);
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r <= 80 || g <= 80 || g <= 70)
    {
        h1c[0].style.color = "#fff"
        h1.innerHTML = `rgb(${r}, ${g}, ${b})`;
    }
    else
    {
        h1c[0].style.color = "#000000"
        h1.innerHTML = `rgb(${r}, ${g}, ${b})`;
    }
    return`rgb(${r}, ${g}, ${b})`;
}
