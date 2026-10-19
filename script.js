



function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}



document.getElementById("one").addEventListener("click", () => {
    document.getElementById("one").style.backgroundColor = getRandomColor();
    let color=getRandomColor();
    document.body.style.backgroundColor =color;
     document.getElementById("color").textContent =`curent color :${color}`;
       document.getElementById("color").style.color = getRandomColor();

   
})