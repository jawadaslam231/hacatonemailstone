const toggalButton = document.getElementById('toggal-skill') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggalButton.addEventListener('click',()=>{
    if(skills.style.display === 'none') {
        skills.style.display ='block'
    } else {
        skills.style.display = 'none'
    }     
});
