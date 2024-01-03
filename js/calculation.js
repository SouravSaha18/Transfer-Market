document.getElementById('calculate').addEventListener('click', function () {
    const playerField = document.getElementById('player');
    const playerString = playerField.value;
    const playerValue = parseInt(playerString);

    if (playerValue < 0 || isNaN(playerValue)) {
        alert("Inputs must be positive numbers");
        playerField.value = "";
        return;
    }

    const playeCost = playerValue * 5;
    const playerCostField = document.getElementById('player-cost');
    playerCostField.innerText = playeCost;
    playerField.value = "";
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerCostField = document.getElementById('player-cost');
    const playerCostString = playerCostField.innerText;
    const playerCostValue = parseInt(playerCostString);

    const managerField = document.getElementById('manager');
    const managerString = managerField.value;
    const managerValue = parseInt(managerString);

    const coachField = document.getElementById('coach');
    const coachString = coachField.value;
    const coachValue = parseInt(coachString);

    //console.log(playerCostValue, managerValue, coachValue);

    if (playerCostValue < 0 || isNaN(playerCostValue) || managerValue < 0 || isNaN(managerValue) || coachValue < 0 || isNaN(coachValue)) {
        alert("Inputs must be positive numbers");
        coachField.value = "";
        managerField.value = "";
        playerCostField.value = "";
        return;
    }

    const total = playerCostValue + managerValue + coachValue;
    const totalField = document.getElementById('total');
    totalField.innerText = total;

    coachField.value = "";
    managerField.value = "";
    playerCostField.value = "";
})