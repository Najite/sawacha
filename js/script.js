// making the top nav responsive
let topNav =() => {
    let nav = document.querySelector('#TopNav')

    if(nav.className === 'topnav'){
        nav.className += ' responsive';
    }
    else{
        nav.className = 'topnav'
    }
}


// making the typing effect
let i = 0;
let text = "Hello!! 'I'm Emmanuel \n and I'm a Backend Developer";
let speed = 60;

let bannerText = () => {
    if(i < text.length){
        document.querySelector('#text').innerHTML += text.charAt(i);
        i++;
        setTimeout(bannerText, speed)
    }
}
window.addEventListener('load', bannerText)







