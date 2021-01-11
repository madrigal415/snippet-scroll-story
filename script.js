// Get the viewport height and multiple it by 1% to get a value for a vh unit

let vh = window.innerHeight * 0.01;

// Then we set the value in the--vh custom property to the root of the

document.documentElement.style.setProperty('--vh', `${vh}px`);

console.log(vh);