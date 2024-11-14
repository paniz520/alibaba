

 let dropdown1 = document.querySelector(".header-more-dropdown");
let navToggle = document.querySelector('.nav-toggle'); 
let mainElement = document.querySelector('.main');

function showMenu1() {
    if(dropdown1.style.display = 'none'){
    let dropdown1 = document.querySelector(".header-more-dropdown");
    dropdown1.style.display = 'block';
    }
    console.log('hello');
}


    mainElement.addEventListener('click', () => {
           dropdown1.style.display = 'none';
    
    }); 
    

const travelOptions = document.querySelectorAll('.home-travel-innerdiv');
const travelsA = document.querySelectorAll('.home-travel-upper-a')
travelOptions.forEach(travelOption => {
    travelOption.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        travelOption.classList.add('active')

    })
});

travelsA.forEach(travela => {
    travela.addEventListener('click', ()=> {
       document.querySelector('.active')?.classList.remove('active');
       travela.classList.add('active');
    });
    
});


let accoridanExpands = document.querySelectorAll('.accordian__expand');
let acordianText = document.querySelectorAll('.accordian__item--text');
let isOpen;
accoridanExpands.forEach((accoridanExpand, index) => {
    accoridanExpand.addEventListener('click', ()=>{
        if( isOpen){
            acordianText[index].style.display = 'none';
            isOpen = false;
        }
        else{
            acordianText[index].style.display = 'block';
            isOpen = true;
        }
})});

/* --------------SLIDER---------------- */

const sliderDIVS = [
    {
        imgOne : 'image/img1slider.jpg' ,
        imgTwo : 'image/img2slider.png'
    } ,
    {
        imgOne : 'image/img2slider.png' ,
        imgTwo : 'image/img3slider.jpg'
    } ,
    {
        imgOne : 'image/img3slider.jpg' ,
        imgTwo : 'image/img4slider.jpg'
    } ,
    {
        imgOne : 'image/img4slider.jpg' ,
        imgTwo : 'image/img1slider.jpg'
    }
]

let text = ''; //create an empty erray

 function slide1Activate(){
    text =
    `
    <div class="main__slider--right">
            <img src = '${sliderDIVS[0].imgOne}'>
        </div>
        <div class="main__slider--left">
            <img src = '${sliderDIVS[0].imgTwo}'>
        </div>
    `
    document.querySelector('.main__slider').innerHTML = text;
    
 }
slide1Activate();
function slide2Activate(){
    text =
    `
    <div class="main__slider--right">
            <img src = '${sliderDIVS[1].imgOne}'>
        </div>
        <div class="main__slider--left">
            <img src = '${sliderDIVS[1].imgTwo}'>
        </div>
    `
    document.querySelector('.main__slider').innerHTML = text;
 }
function slide3Activate(){
    text =
    `
    <div class="main__slider--right">
            <img src = '${sliderDIVS[2].imgOne}'>
        </div>
        <div class="main__slider--left">
            <img src = '${sliderDIVS[2].imgTwo}'>
        </div>
    `
    document.querySelector('.main__slider').innerHTML = text;
 }
function slide4Activate(){
    text =
    `
    <div class="main__slider--right">
            <img src = '${sliderDIVS[3].imgOne}'>
        </div>
        <div class="main__slider--left">
            <img src = '${sliderDIVS[3].imgTwo}'>
        </div>
    `
    document.querySelector('.main__slider').innerHTML = text;
 }

 let BGchange = document.querySelectorAll('.backgroundChange')
     BGchange.forEach(BG => {
        BG.addEventListener('click', () =>{
            document.querySelector('.activeBG')?.classList.remove('activeBG')
            BG.classList.add('activeBG');
        });
     });
    
