document.addEventListener("DOMContentLoaded",function (){
    emailjs.init("UCkPwDGfELRPqdA-v");
});

const form=document.getElementById("contact-form");
const status=document.getElementById("status-message");

form.addEventListener("submit", function (event){ 
    event.preventDefault();

    const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };
    console.log(formData)
    
    
    emailjs.send("service_t8chtt6","template_uyc6g6b",formData)
    .then(()=>{
        status.textContent="Message has been Sent Succesfully!"
        status.style.color="violet"
        form.reset();
    })
    .catch((error)=>{
        status.textContent="Failed to Send Message.Try Again"
        status.style.color="red"
        console.error(error)
    })
});