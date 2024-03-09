const switchTheme = document.querySelector('#themeSwitch');
switchTheme.addEventListener('click',changeBg);
function changeBg(event){
    const body = document.querySelector('body');
    let currColor = body.style.backgroundColor;
    if(currColor=='black'){
        body.style.backgroundColor='white';
        switchTheme.style.color='black';
    }
    else{
        body.style.backgroundColor='black';
        switchTheme.style.color='white';
    }
}