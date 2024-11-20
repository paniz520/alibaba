/* ----------- activate and deactivate stories on blog --------------- */
let CloseActiveStory = document.querySelector('.active-stories-close');
let activeStories = document.querySelector('.active-stories');

function disapearStory(){
    
    activeStories.style.display = 'none';
}


let storiesItem = document.querySelectorAll('.BlogStories__Item');
let image = '';

storiesItem.forEach( (item) => {
    item.addEventListener('click', ()=> {
        const imageURL = item.getAttribute('.data-image-url');
        activeStories.style.display = 'flex';

        image += 
        `
            <div onclick=disapearStory()>
        
            <svg class="active-stories-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" fill="rgba(255,255,255,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>

            </div>

            <span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path> </svg>
                
               <p>بعدی</p>
           </span>

            <img src="${imageURL}">
        `

        activeStories.innerHTML = image;
    })
})
