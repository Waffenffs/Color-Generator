const colors = ["violet", "purple", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // randomNumber <= colors.length
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

const getRandomNumber = () => {
    return Math.floor(Math.random()*colors.length);
}
