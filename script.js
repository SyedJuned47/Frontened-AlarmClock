// Variables
const currentTimeElement = document.getElementById('current-time');
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');
const ampmSelect = document.getElementById('ampm');
const setAlarmButton = document.getElementById('set-alarm-button');
const alarmList = document.getElementById('alarm-list');

// Display and update the current time
function displayCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    currentTimeElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

setInterval(displayCurrentTime, 1000);

// Handle setting alarms
setAlarmButton.addEventListener('click', () => {
    const hour = parseInt(hourInput.value);
    const minute = parseInt(minuteInput.value);
    const second = parseInt(secondInput.value);
    const ampm = ampmSelect.value;

    // Add alarm to the list
    const alarmItem = document.createElement('li');
    alarmItem.textContent = `${hour}:${minute}:${second} ${ampm}`;
    alarmList.appendChild(alarmItem);

    // Clear input fields
    hourInput.value = '';
    minuteInput.value = '';
    secondInput.value = '';
});

// Function to set alarms based on user input
function setAlarm() {
    const hour = parseInt(hourInput.value);
    const minute = parseInt(minuteInput.value);
    const second = parseInt(secondInput.value);
    const ampm = ampmSelect.value;
  
    // Add alarm to the list
    const alarmItem = document.createElement('li');
    const alarmTime = `${hour}:${minute}:${second} ${ampm}`;
    alarmItem.innerHTML = `${alarmTime} <button class="delete-button">Delete</button>`;
    alarmList.appendChild(alarmItem);
  
    // Clear input fields
    hourInput.value = '';
    minuteInput.value = '';
    secondInput.value = '';
  }

  
// Add functionality to delete alarms (you can implement this)
// Function to delete alarms
function deleteAlarm() {
    const deleteButtons = document.querySelectorAll('.delete-button');
  
    deleteButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        alarmList.removeChild(alarmList.children[index]);
      });
    });
  }
  
  // Call the deleteAlarm function to set up event listeners
  deleteAlarm();
  