const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".btn-check");
const messageOutput = document.querySelector(".message-box")


checkButton.addEventListener("click", () => {
    if (dateOfBirth.value && luckyNumber.value) {
        console.log(dateOfBirth.value, luckyNumber.value);
        const dob = dateOfBirth.value;
        const sum = calculateSum(dob);
        let result = compareValues(sum, luckyNumber);
        printMessage(result);
    } else {
        messageOutput.innerHTML = "please enter a value 🙄";
    }

});


const printMessage = (result) => {
    result ? messageOutput.innerHTML = `Yayy! ${luckyNumber.value} is your lucky number! 😃` : messageOutput.innerHTML = `uh oh! ${luckyNumber.value} is not your lucky number! 😶`
}

const compareValues = (sum, luckyNumber) => (sum % Number(luckyNumber.value) === 0) ? true : false;

const calculateSum = (dob) => {
    dobFiltered = replaceAll(dob, "-", "");
    let sum = 0;
    for (let index = 0; index < dobFiltered.length; index++) sum = sum + Number(dobFiltered.charAt(index));
    return sum
}

const replaceAll = (str, beforeValue, afterValue) => {
    let finalString = ""
    for (let i = 0; i < str.length; i = i + 1)(str[i] == beforeValue) ? finalString += afterValue : finalString += str[i];
    return finalString
}