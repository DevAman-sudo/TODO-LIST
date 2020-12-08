// JavaScript DOM Elements //
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');
const dataContainer = document.getElementById('data-container');

// Append Data Function In Data Container //
function appendData(data) {
    // body...
    const dataElement = document.createElement('small');
    dataElement.classList.add('small');
    dataElement.innerText = data;
    dataContainer.appendChild(dataElement);
}

// Submit Event Listener On Form //
form.addEventListener('submit', (event) => {
    // Prevent Page To Submit //
    event.preventDefault();

    // Add Content If There`s Data In Text-Area //
    if (textArea.value !== "") {
        // Adding Data To dataContainer //
        appendData(textArea.value)
    }

    // Auto Scrolling Data-Container On Content Add //
    dataContainer.scrollBy(0, -10000000);

    // Clearing Text-Area After Submit //
    textArea.value = "";
});