var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/iu.png') {
        myImage.setAttribute ('src','images/apple-logo-space.png');
    } else {
        myImage.setAttribute ('src','images.iu.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my first website, ' + myName; 
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
     var storedName = localStorage.getItem('name');
     myHeading.textContent = 'Welcome to my first website, ' + storedName;

}

myButton.onclick = function() {
    setUserName();
}