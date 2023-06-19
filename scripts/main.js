const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/images/zeus1.jpg") {
    myImage.setAttribute("src", "/images/teco1.png");
  } else {
    myImage.setAttribute("src", "/images/zeus1.jpg");
  }
};

let myButton = document.querySelector("button");
let myheading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("pls enter your name.")
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myheading.textContent = `bonjour, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myheading.textContent = `bonjour, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};