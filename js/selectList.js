let selectPlayerList = [];

const player = ['neymar', 'messi', 'bappi', 'vitor', 'ramos', 'renato'];

function findPlayerName(i) {
    if (selectPlayerList.length == 5) {
        alert("You Can't Select More Than 5 Players");
        return;
    }
    const playerNameField = document.getElementById(player[i]);
    const playerName = playerNameField.innerText;

    const playerList = document.getElementById('selected-player-list');
    const li = document.createElement('li');
    li.innerText = playerName;

    playerList.appendChild(li);
    selectPlayerList.push(playerName);
}

document.getElementById('select-btn-1').addEventListener('click', function () {
    findPlayerName(0);
    this.disabled = true;
})
document.getElementById('select-btn-2').addEventListener('click', function () {
    findPlayerName(1);
    this.disabled = true;
})
document.getElementById('select-btn-3').addEventListener('click', function () {
    findPlayerName(2);
    this.disabled = true;
})
document.getElementById('select-btn-4').addEventListener('click', function () {
    findPlayerName(3);
    this.disabled = true;
})
document.getElementById('select-btn-5').addEventListener('click', function () {
    findPlayerName(4);
    this.disabled = true;
})
document.getElementById('select-btn-6').addEventListener('click', function () {
    findPlayerName(5);
    this.disabled = true;
})