// Get elements
const scheduleShiftBtn = document.getElementById('schedule-shift-btn');
const workerNameInput = document.getElementById('worker-name');
const shiftDateInput = document.getElementById('shift-date');
const shiftTimeInput = document.getElementById('shift-time');
const shiftList = document.getElementById('shift-list');
const backToDashboardBtn = document.getElementById('back-to-dashboard');

// Handle adding a shift
scheduleShiftBtn.addEventListener('click', function () {
    const workerName = workerNameInput.value;
    const shiftDate = shiftDateInput.value;
    const shiftTime = shiftTimeInput.value;

    if (workerName && shiftDate && shiftTime) {
        // Create a new list item to display the shift
        const listItem = document.createElement('li');
        listItem.textContent = `Worker: ${workerName}, Date: ${shiftDate}, Time: ${shiftTime}`;
        shiftList.appendChild(listItem);

        // Clear input fields
        workerNameInput.value = '';
        shiftDateInput.value = '';
        shiftTimeInput.value = '';
    } else {
        alert('Please enter all shift details.');
    }
});

// Handle back to dashboard click
backToDashboardBtn.addEventListener('click', function () {
    window.location.href = 'index.html';  // Navigate back to dashboard
});
