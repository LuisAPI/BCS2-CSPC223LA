/*
De La Salle University – Dasmariñas
S-CSPC223LA — Programming Languages (Laboratory)

Luis Anton P. Imperial
BCS22

Monday, February 26, 2024

*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let newContactsAdded = 0
let newContactsRequested = 2;

while(newContactsAdded < newContactsRequested) {
    let newName = prompt("NEW CONTACT — Enter your name: ");
    let newPhone = prompt("NEW CONTACT — Enter your phone number: ");
    let newEmail = prompt("NEW CONTACT — Enter your email address: ");
    console.log("");
    
    let newContact = {
        name: newName,
        phone: newPhone,
        email: newEmail
    };
    
    contacts.push(newContact);
    newContactsAdded++;
};

let last = contacts.length - 1;

window.alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
window.alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);