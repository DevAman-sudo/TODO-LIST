// JavaScript DOM Elements //
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');
const dataContainer = document.getElementById('data-container');

// Audio MP3 Path //
const audio = new Audio('/MP3/notification.mp3');

// Append Data Function In Data Container //
function appendData(data) {
    // Creating Check Button //
    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    checkButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>' ;
    
    // Creating Delete Button //
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>' ;
    
    // Creating Div Element For Data Container //
    const dataElement = document.createElement('div');
    dataElement.classList.add('small');
    const dataElementChild = document.createElement('div');
    dataElementChild.classList.add('content');
    dataElementChild.innerText = data ;
    
    // Appending Data On Created Content //
    dataElement.appendChild(dataElementChild);
    dataElement.appendChild(checkButton);
    dataElement.appendChild(deleteButton);
    dataContainer.appendChild(dataElement);
    
    // Listining Click Event On checkButton //
    checkButton.addEventListener('click' , (event) => {
        // Prevent Page To Submit //
        event.preventDefault();
        
        // Changing Styles On Click //
        checkButton.parentElement.classList.toggle('smallChecked');
    });
    
    // Listining Click Event On deleteButton //  
    deleteButton.addEventListener('click' , (event) => {
        // Prevent Page To Submit //
        event.preventDefault();
        
        // Deleting Content On Click //
        deleteButton.parentElement.remove();
    });
}

// Submit Event Listener On Form //
form.addEventListener('submit', (event) => {
    // Prevent Page To Submit //
    event.preventDefault();

    // Add Content If There`s Data In Text-Area //
    if (textArea.value !== "") {
        // Adding Data To dataContainer //
        appendData(textArea.value)
        // Audio Play After Data Added //
        audio.play();
    }

    // Auto Scrolling Data-Container On Content Add //
    dataContainer.scrollBy(0, -10000000);
    
    // Animating Content Element On Data Add //
    anime({
        targets: '.small' ,
        translateY: 5
    })

    // Clearing Text-Area After Submit //
    textArea.value = "";
});

// Demo Push Js Notify Function //
function notify() {
    Push.create('Hello World');
}
notify();