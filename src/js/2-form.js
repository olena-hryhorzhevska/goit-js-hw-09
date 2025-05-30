const formData = {
  email: '',
  message: '',
};
const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');


let savedData = JSON.parse(localStorage.getItem(key)) || {};
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
  formData.email = savedData.email || '';
  formData.message = savedData.message || ''; 
  


form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(key);
  formData.email = '';
  formData.message = '';
  form.reset();
});

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(formData))
})