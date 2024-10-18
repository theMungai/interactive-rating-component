const showThankYou = document.querySelector(".submit-button");


const clientChoice1 = document.querySelector("#number1");
const clientChoice2 = document.querySelector("#number2");
const clientChoice3 = document.querySelector("#number3");
const clientChoice4 = document.querySelector("#number4");
const clientChoice5 = document.querySelector("#number5");

let stateResults = document.querySelector("#state-results");

showThankYou.addEventListener('click', () =>{
    
    const ratingContainer = document.querySelector(".rating-container");
    const thankYouContainer = document.querySelector(".thank-you-state-container");
    thankYouContainer.style.display = "block";
    ratingContainer.style.display ="none";
      
});

clientChoice1.addEventListener('click', () => {
    stateResults.textContent = `You selected 1 out of 5`
})

clientChoice2.addEventListener('click', () => {
    stateResults.textContent = `You selected 2 out of 5`
})

clientChoice3.addEventListener('click', () => {
    stateResults.textContent = `You selected 3 out of 5`
})

clientChoice4.addEventListener('click', () => {
    stateResults.textContent = `You selected 4 out of 5`
})

clientChoice5.addEventListener('click', () => {
    stateResults.textContent = `You selected 5 out of 5`
})
