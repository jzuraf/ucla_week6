console.log('Hello from js/scripts.js!');

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const para = document.querySelector('p');

/* Looping through images */
for(let i = 1; i <= 5; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src','images/pic' + i + '.jpg');
thumbBar.appendChild(newImage);
newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
    para.textContent = info;
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
