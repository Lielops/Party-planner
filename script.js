// This file contains the JavaScript code that manages the functionality of the PartyPlanner application.

let partyDetails = {
    date: '',
    description: '',
    inviteMessage: '',
    attendees: []
};

function setPartyDate() {
    const dateInput = document.getElementById('party-date').value;
    partyDetails.date = dateInput;
    alert(`Party date set to: ${partyDetails.date}`);
}

function setPartyDescription() {
    const descriptionInput = document.getElementById('party-description').value;
    partyDetails.description = descriptionInput;
    alert(`Party description set to: ${partyDetails.description}`);
}

function setInviteMessage() {
    const inviteInput = document.getElementById('invite-message').value;
    partyDetails.inviteMessage = inviteInput;
    alert(`Invite message set to: ${partyDetails.inviteMessage}`);
}

function registerAttendee() {
    const nameInput = document.getElementById('attendee-name').value;
    const surnameInput = document.getElementById('attendee-surname').value;

    if (nameInput && surnameInput) {
        partyDetails.attendees.push({ name: nameInput, surname: surnameInput });
        alert(`Registered: ${nameInput} ${surnameInput}`);
        document.getElementById('attendee-name').value = '';
        document.getElementById('attendee-surname').value = '';
    } else {
        alert('Please enter both name and surname.');
    }
}

function displayAttendees() {
    const attendeesList = document.getElementById('attendees-list');
    attendeesList.innerHTML = '';
    partyDetails.attendees.forEach(attendee => {
        const listItem = document.createElement('li');
        listItem.textContent = `${attendee.name} ${attendee.surname}`;
        attendeesList.appendChild(listItem);
    });
}

document.getElementById('set-date-btn').addEventListener('click', setPartyDate);
document.getElementById('set-description-btn').addEventListener('click', setPartyDescription);
document.getElementById('set-invite-btn').addEventListener('click', setInviteMessage);
document.getElementById('register-btn').addEventListener('click', () => {
    registerAttendee();
    displayAttendees();
});
