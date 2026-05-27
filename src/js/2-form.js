const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});

const savedSettings = localStorage.getItem('feedback-form-state');

if (savedSettings) {
  const parsedSettings = JSON.parse(savedSettings);
  formData.email = parsedSettings.email;
  formData.message = parsedSettings.message;

  form.elements.email.value = parsedSettings.email;
  form.elements.message.value = parsedSettings.message;
}
