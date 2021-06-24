console.log('hi bro');

// variables
const background = document.querySelector('.background');
const writeButton = document.querySelector('.nav-write');
const write = document.querySelector('.container');
const writeBack = document.querySelector('.write-header__back');
const addSnippet = document.querySelector('.write-form__button')
const confirmation = document.querySelector('.write-confirmation');

// input fields
const inputHeading = document.querySelector('.write-form__heading');
const inputDesc = document.querySelector('.write-form__heading');
// description
const inputLang = document.querySelector('.write-form__language');
// language
const inputCode = document.querySelector('.write-form__snippet');

// main page variables
const snippetList = document.querySelector('.content-list');

document.addEventListener('DOMContentLoaded', ()=>{
    // default
    background.classList.remove('visible');
    background.classList.add('hidden');
    write.classList.remove('visible');
    write.classList.add('hidden');
    confirmation.classList.remove('visible');
    confirmation.classList.add('hidden');

    // if write button is clicked make the add snippet column visible
    writeButton.addEventListener('click', ()=>{
        background.classList.add('visible');
        background.classList.remove('hidden');
        write.classList.add('visible');
        write.classList.remove('hidden');
    });
    // if back button is clicked make the add snippet column hidden
    writeBack.addEventListener('click', ()=>{
        background.classList.remove('visible');
        background.classList.add('hidden');
        write.classList.remove('visible');
        write.classList.add('hidden');
    });

    addSnippet.addEventListener('click', snippetAdd);
});

function snippetAdd(){
    // input values
    var valueHeading = (inputHeading.value);
    var valueDesc = (inputDesc.value);
    var valueLang = (inputLang.value);
    var valueCode = (inputCode.value);

    var liSnippet = document.createElement("LI");
    var textHeading = valueHeading;
    // liSnippet.appendChild(textHeading);
    snippetList.appendChild(liSnippet);
    console.log(liSnippet.innerHTML);
}