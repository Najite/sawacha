// making the top nav responsive
let topNav =() => {
    let nav = document.querySelector('#TopNav');

    if(nav.className === 'topnav'){
        nav.className += ' responsive';
        
        // let change = () => {
        //     nav.style.background('blue')
        //     // console.log('clicked')
        // }

        // nav.addEventListener('click', change)

        
    }
    else{
        nav.className = 'topnav'
    }
}


// making the typing effect
let i = 0;
let text = "Hello!! 'I'm Emmanuel \n and I'm A Backend Developer";
let speed = 60;

let bannerText = () => {
    if(i < text.length){
        document.querySelector('#text').innerHTML += text.charAt(i);
        i++;
        setTimeout(bannerText, speed)
    }
}
window.addEventListener('load', bannerText)


//adding modal hire form
const modal = document.querySelector('#hire-modal');
const hireBtn = document.querySelector('#hire');
const close = document.querySelector('#cancelBtn');

const openModal = () => {
    modal.style.display ='block';
};

hireBtn.addEventListener('click', openModal);

const closeModal = () => {
    modal.style.display = 'none';
};
close.addEventListener('click', closeModal);


window.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
} )


let callback = (entries) =>{
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting){
                entry.target.style.animation = entry.target.dataset.animate;
                move();            
                moveHtml();
                moveCss();
                moveJS()
            } else {
                entry.target.style.animation = 'none';
            }
        }
    );
};

let observer = new IntersectionObserver(callback);


const animationItem = document.querySelectorAll('.progress', '.mini-skill');
animationItem.forEach(item => {
    observer.observe(item)
})



// skill animation for python
let move = () =>{
let x = 0; 

    if(x == 0){
        
        x=1;
        let elem = document.querySelector('#python');
        let width = 1;
        let id = setInterval(frame, 35);

        function frame(){
            if( width >= 60){
                clearInterval(id);
                x = 0;
            } else{
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '%';
            }
        }

    }
}



// animating html skills
let h = 0;
let moveHtml = () =>{
    if(h == 0){
        h=1;
        let elem = document.querySelector('#html');
        let width = 1;
        let id = setInterval(frame, 35);

        function frame(){
            if( width >= 100){
                clearInterval(id);
                h = 0;
            } else{
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '%';

            }
        }
    }
}

// animating css skills
let c = 0;
let moveCss = () =>{
    if(c == 0){
        c=1;
        let elem = document.querySelector('#css');
        let width = 1;
        let id = setInterval(frame, 35);

        function frame(){
            if( width >= 50){
                clearInterval(id);
                c = 0;
            } else{
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '%';

            }
        }
    }
}

// animating javascript skill
let j = 0;
let moveJS = () =>{
    if(j == 0){
        j=1;
        let elem = document.querySelector('#js');
        let width = 1;
        let id = setInterval(frame, 35);

        function frame(){
            if( width >= 30){
                clearInterval(id);
                j = 0;
            } else{
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '%';

            }
        }
    }
}



