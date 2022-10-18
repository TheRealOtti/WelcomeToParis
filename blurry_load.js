//bringing element loadText
const loadText = document.querySelector('.loadingText')
const background_bg = document.querySelector ('.background_bg')

let load = 0

let int = setInterval( blurring, 40) //40 milliseconds

function blurring()
{
    load++

    if (load > 99) 
    {
     clearInterval(int)   
    }


    loadText.innerText = `${load}%`

    //scaling the text opacity from 1 -0
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    

    //scaling the background opacity from 30-0/
    background_bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

//from stack over flow
//function scale (number, inMin, inMax, outMin, outMax) {
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
//