const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Load saved data from localStorage on page load
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;

  // Fill form fields with saved data
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// Handle input events
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Check if all fields are filled
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Log form data and clear everything
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
