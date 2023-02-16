
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneString);
    return currentPhoneTotal;
}

function setElementValueById(elementId, value){
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
        // calculate total
        const currentPhoneTotal = getTextElementValueById('phone-total');
        const currentcaseTotal = getTextElementValueById('case-total');
        const currentSubTotal = currentPhoneTotal + currentcaseTotal;
      setElementValueById('sub-total', currentSubTotal);


        // calculate tax
        const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
        const taxAmount = parseFloat(taxAmountString);
        setElementValueById('tax-amount', taxAmount);

        const finalAmount = currentSubTotal + taxAmount;
        setElementValueById('final-total', finalAmount);
}