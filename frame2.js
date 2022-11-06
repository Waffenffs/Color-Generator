const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#";
    for(let i=5;i>=0;i--){
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

const getRandomNumber = () => {
    return Math.floor(Math.random()*hex.length)
}