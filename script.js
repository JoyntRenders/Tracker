document.getElementById('logWater').addEventListener('click', () => logActivity("Water"));
document.getElementById('logMeal').addEventListener('click', () => logActivity("Meal"));
document.getElementById('logSnack').addEventListener('click', () => logActivity("Snack"));
document.getElementById('logPlaytime').addEventListener('click', () => logActivity("Playtime"));
document.getElementById('logSmoke').addEventListener('click', () => logActivity("Smoke"));
document.getElementById('logSex').addEventListener('click', () => logActivity("Sex"));
document.getElementById('logWork').addEventListener('click', () => logActivity("Work"));
document.getElementById('logRelax').addEventListener('click', () => logActivity("Relax"));
document.getElementById('logPee').addEventListener('click', () => logActivity("Pee"));
document.getElementById('logPoo').addEventListener('click', () => logActivity("Poo"));
document.getElementById('logArgue').addEventListener('click', () => logActivity("Argue"));
document.getElementById('logRosin').addEventListener('click', () => logActivity("Rosin"));
document.getElementById('logWalk').addEventListener('click', () => logActivity("Walk"));
document.getElementById('logShop').addEventListener('click', () => logActivity("Shop"));
document.getElementById('logOffice').addEventListener('click', () => logActivity("Office"));
document.getElementById('logJO').addEventListener('click', () => logActivity("JO"));
document.getElementById('undoButton').addEventListener('click', undoLastEntry);

function logActivity(type) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const listItem = document.createElement('li');
    listItem.textContent = `${type} at ${timeString}`;
    document.getElementById('logList').appendChild(listItem);
    sendActivityData(type);
}

function undoLastEntry() {
    const logList = document.getElementById('logList');
    if (logList.lastChild) {
        logList.removeChild(logList.lastChild);
    }
}

function sendActivityData(activity) {
    const baseURL = 'https://script.google.com/macros/s/AKfycbxi_0qI_oIA_mv4uPO4Q1qf1_l2jJJj1H9zxP9AyappID1LIBSXhVuQKiayf2q1IZ86/exec';
    fetch(`${baseURL}?activity=${encodeURIComponent(activity)}`, {
        method: 'GET' // Can change to POST if required by server
    })
    .then(response => response.text()) // Processing the response
    .then(data => console.log(data)) // Handling data
    .catch(error => console.error('Error:', error)); // Handling errors
}
