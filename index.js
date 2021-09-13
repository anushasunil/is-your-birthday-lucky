const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector(".btn-check");
const messageOutput = document.querySelector(".message-box")


checkButton.addEventListener("click", function checkIfYourBirthdateIsLucky(){
    console.log(dateOfBirth.value, luckyNumber.value);
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob); 
    let result = compareValues(sum, luckyNumber);
    printMessage(result);

})

function printMessage(result)
{
    if(result)
    {
        messageOutput.innerHTML = "Yayy! " + luckyNumber.value + " is your lucky number! 😃"
    }
    else
    {
        messageOutput.innerHTML = "uh oh! " + luckyNumber.value + " is not your lucky number! 😶"
    }
}

function compareValues(sum, luckyNumber)
{
    if(sum % Number(luckyNumber.value) === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function calculateSum(dob)
{
    dobFiltered = replaceAll(dob, "-", "");
    let sum = 0;
    for(let index = 0; index < dobFiltered.length; index = index + 1)
    {
        sum = sum + Number(dobFiltered.charAt(index));
    }
    console.log(sum)
    return sum
}

function replaceAll(str, beforeValue, afterValue)
{
    let finalString = ""
    for(let i = 0; i < str.length; i = i + 1 )
    {
        if(str[i] == beforeValue)
        {
            finalString = finalString + afterValue;
        }
        else
        {
            finalString = finalString + str[i];
        }
    }
    console.log(finalString)
    return finalString
}