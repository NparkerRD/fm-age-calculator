"use strict";

/*
    * Create function for checking if field is empty
    * Create function for rendering a message
    * Create function to calculate person's age
    * 
    * 'Day' will need to be between 1 and 31
    * 'Month' will need to be between 1 and 12
    * 'Year' will need to be less than the current year (will need access to the current date)
*/

// DOCUMENT ELEMENTS
const [resultYears, resultMonths, resultDays] = document.querySelectorAll('.result');
const btnCalculate = document.querySelector('.btn__submit');

// const errMsgEmpty = 'This field is required';
const errorMessages = {
    empty: 'This field is required',
    invalidDay: 'Must be a valid day',
    invalidMonth: 'Must be a valid month',
    invalidYear: 'Must be in the past'
};

// Render message - FUTURE: Add in a message
const renderErrorMessage = function (el, msg) {
    el.classList.add('--error');
    const markup = `<p class="error-message">${msg}</p>`;
    el.insertAdjacentHTML('beforeend', markup);
    
}

/*
    * validateField current functionality may need to move to renderErrorMessage
    * validateField only needs to check if the field is valid, whether it's empty, or contains the right format
    * validateField needs to change to validateFields; create four different functions to check each validation type   

*/
const validateField = function (input) {
    const parent = input.closest('.input-group');
    if (!input.value) { // check if input field is empty
        // Alternative: 
        // const errorMessage = parent.querySelector('.error-message') ? true : false;
        // Check if there is already an error message
        if (!input.nextElementSibling) renderErrorMessage(parent, errorMessages.empty);
    } else if (input.value) {
        parent.classList.remove('--error');
        if (parent.lastChild.classList) {
            if (parent.lastChild.classList.contains('error-message')) parent.lastChild.remove()
        } 
    }
}

const validateFields = function (arr) {
    arr.forEach((input) => {
        const parent = input.closest('.input-group');
        if (!input.value) {
            parent.classList.add('--error');
        }
    })
}

btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();
    const [inputDay, inputMonth, inputYear] = document.querySelectorAll('.input');
    // Check if the input field is empty. If it is, attach the error message to the end of the input group (can possibly do with 'closest' parent method)
    // validateFields([inputDay, inputMonth, inputYear]);
    validateField(inputDay);
    validateField(inputMonth);
    validateField(inputYear);
    // FIX: render message in ALL field groups
})

// renderErrorMessage(inputGroupDay);