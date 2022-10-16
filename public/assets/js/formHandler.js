console.log(`hello`)

const formSubmit = document.querySelector('#submitButton');
const submitConfirm = document.querySelector('#submitConfirm');


formSubmit.addEventListener('click', async (event) => {
    // await event.preventDefault;
    await window.location.assign(`/api/form/data`);
    submitConfirm.textContent = `Form has been submitted.`
    console.log(`Form submitted.`);

})

// when click submit -> data stored 