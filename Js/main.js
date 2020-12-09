// JavaScript DOM Elements //
const form = document.getElementById('form');
const textArea = document.getElementById('text-area');
const button = document.getElementById('button');
const dataContainer = document.getElementById('data-container');

// Audio MP3 Path //
const audio = new Audio('MP3/notification.mp3');

// Append Data Function In Data Container //
function appendData(data) {
    // Creating Button Container //
    const buttonContainer =  document.createElement('div');
    buttonContainer.classList.add('button-container');
    
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
    dataElement.classList.add('data-element');
    
    // Creating Content Holder For Data Element //
    const dataElementChild = document.createElement('div');
    dataElementChild.classList.add('data-content');
    dataElementChild.innerText = data ;
    
    // Adding Button to buttonContainer //
    buttonContainer.appendChild(checkButton);
    buttonContainer.appendChild(deleteButton);
    
    // Appending Created Container To Data Container //
    dataElement.appendChild(dataElementChild);
    dataElement.appendChild(buttonContainer);
    dataContainer.appendChild(dataElement);
    
    // Listining Click Event On checkButton //
    checkButton.addEventListener('click' , (event) => {
        // Prevent Page To Submit //
        event.preventDefault();
        
        // Changing Styles On Click //
        dataElement.classList.toggle('smallChecked');
    });
    
    // Listining Click Event On deleteButton //  
    deleteButton.addEventListener('click' , (event) => {
        // Prevent Page To Submit //
        event.preventDefault();
        
        // Deleting Content On Click //
        dataElement.remove();
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
        targets: '.data-element' ,
        translateY: 5
    })

    // Clearing Text-Area After Submit //
    textArea.value = "";
});

// Demo Push Js Notify Function //
function notify() { // It Will Not Work In Mobile Devices //
    Push.create('Hello World');
}
notify();