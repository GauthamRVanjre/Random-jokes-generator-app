//this is done using fetch API

const jokeDiv = document.querySelector('.joke p');
const btn = document.querySelector('button');

document.addEventListener('DOMContentLoaded', getJoke);

btn.addEventListener('click', getJoke);

function change() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var a = Math.floor(Math.random() * 10)
    var mycolor = "rgba(" + r + "," + g + "," + b + "," + a + ")";

    return mycolor;

}




async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeDiv.innerHTML = jokeObj.joke;
    var changeColor = change();

    // document.querySelector(".container").style.backgroundColor = changeColor;
    document.querySelector("body").style.backgroundColor = changeColor;
    document.querySelector(".joke-para").style.color = changeColor;
    document.querySelectorAll(".fab")[1].style.backgroundColor = changeColor;
    document.querySelectorAll(".fab")[0].style.backgroundColor = changeColor;
    document.querySelector(".btn").style.backgroundColor = changeColor;

    console.log(jokeData);
}