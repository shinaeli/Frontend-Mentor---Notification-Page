// Select all elements with the class 'unread'
const unreadEl = document.querySelectorAll('.unread');
// Convert the html collection 'unreadEl' into an array and find its length
// Assign the length to the variable 'counter'
let counter = [...unreadEl].length;
// Select the element with the class 'nums'
// Assign the element found to the variable 'numsEl'
const numsEl = document.querySelector('.nums');
// Set the text content of 'numsEl' to the value of 'counter'
numsEl.textContent = counter;
// Select the button element and assign it to the variable 'buttonEl'
const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', function() {
    // If 'counter' is less than or equal to zero, the text conetent of 'numsEl' is set to zero
    if(counter <= 0) {
        numsEl.textContent = 0;
    } else {
        [...unreadEl].forEach(item => {
            item.classList.remove('unread')
            counter--;
            numsEl.textContent = counter;
        });
    }
})


