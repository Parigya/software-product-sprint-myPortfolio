// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
//To show menu upon clicking the menu button
function fetchData(){
    fetch('/data').then(response => response.json()).then((comments)=>{
        const commentListElement = document.getElementById('comment-container');
        commentListElement.innerHTML = '';
        commentListElement.appendChild(
            createListElement('Comment ' + comments[0]));
        commentListElement.appendChild(
            createListElement('Comment ' + comments[1]));
        commentListElement.appendChild(
            createListElement('Comment ' + comments[2]));

    });
}
function createListElement(text){
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
}
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
//Active and remove menu
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    //for retaining the active underlining link
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    //remove menu after selecting(the active) an option
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

//Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance : '65px', //To make it look like its coming from above
    duration: 1000,
    reset: true
})

//Scroll home
sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home_img', {delay: 400})
sr.reveal('.home_social-icon',{interval: 200})
//Scroll about
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200}) 
sr.reveal('.about_text',{delay: 400})
//Scroll skills
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.skills_img',{display: 400})
//Scroll flipside
sr.reveal('.flip_img',{interval: 200})
//Scroll contact
sr.reveal('.contact_input',{interval: 200})
