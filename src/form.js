const minName = 3;
window.nameHandler = nameHandler;
window.questionsHandler = questionsHandler;

function questionsHandler(event) {
    event.preventDefault();
    let formData = null;
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    if (checkName(name, 'name') && checkPhone(phone, 'phone')) {
      formData = {name, phone};
    } else {
      return;
    }
    cleanForm();
    sendData(formData);
  }
  
  function nameHandler(event) {
    checkName(event.target.value, event.target.getAttribute('id'));
  }

  
  function elError(id) {
    document.getElementById(id).style.border = 'red solid 1px';
    document.querySelector(`[for="${id}"]`).style.color = 'red';
  }
  
  function elSuccess(id) {
    document.getElementById(id).style.border = null;
    document.querySelector(`[for="${id}"]`).style.color = null;
  }
  
  function checkName(name, id) {
    let result = null;
    name.length < minName ? result=false : result=true;
    result ? elSuccess(id) : elError(id);
    return result;
  }
  
  function checkPhone(phone, id) {
    let result = null;
    phone.length === 0 ? result=false : result=true;
    result ? elSuccess(id) : elError(id);
    return result;
  }
  
  function cleanForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  }
  
  function sendData(formData) {
    alert(`Вами отправлены данныe: ${formData.name}, ${formData.phone}`);
  }