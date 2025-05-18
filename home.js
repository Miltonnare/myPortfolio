document.addEventListener("DOMContentLoaded",function (){
    emailjs.init("UCkPwDGfELRPqdA-v");
});

const form=document.getElementById("contact-form");
const status=document.getElementById("status-message");

form.addEventListener("submit", function (event){ 
    event.preventDefault();

    const formData=new formData(form)
    const template={
        name:formData.get("name"),
        email:formData.get("email"),
        subject:formData.get("subject"),
        message:formData.get("message")
    };
    emailjs.send("service_t8chtt6","template_uyc6g6b",template)
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