const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const textarea = form.querySelector('textarea');

const formState = {
    email: "",
    message: ""
}

const formData = localStorage.getItem('feedback-form-state');

if (formData) {
    const jsonData = JSON.parse(formData);
    formState.email = jsonData.email;
    formState.message = jsonData.message;
    emailInput.value = formState.email;
    textarea.value = formState.message;
}

form.addEventListener('input', e => {
    formState.email = emailInput.value.trim();
    formState.message = textarea.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formState))
})

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!(formState.email && formState.message)) {
        alert("Fill please all fields");
        return;
    }

    console.log(formState)
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formState.email = '';
    formState.message = '';
    console.log(formState)
})