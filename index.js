document.getElementById('contact').addEventListener('submit', submitCont);
var contacts = JSON.parse(localStorage.getItem('contactList') ) || [];
function submitCont(){
    event.preventDefault();
    var contObj={
        name:document.querySelector('#name').value,
        number:document.querySelector('#number').value,
        type:document.querySelector('#type').value,
    }
    contacts.push(contObj);
    localStorage.setItem('contactList', JSON.stringify(contacts));
    alert("contact saved Successfully");
}
window.addEventListener('load', function() {
    displayData(conct);
});
