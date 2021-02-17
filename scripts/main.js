let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/paint-it-black.png') {
      myImage.setAttribute('src','images/paint-it-black2.png');
    } else {
      myImage.setAttribute('src','images/paint-it-black.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Welcome to Westview, ${myName}`;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Westview, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
