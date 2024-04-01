const form=document.querySelector('form')
const email=document.getElementById('email')
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const message=document.getElementById('message')
const subject=document.getElementById('subject')



const sendEmail=()=>{
    const bodyMessage=`FullName: ${firstName.value} ${lastName.value} <br> Email:${email.value} <br> Message: ${message.value}`
    console.log(bodyMessage)
    Email.send({
        SecureToken : "f978e73c-127d-47e2-887c-1a709c11f1a2",
        To : 'superkingsely0802@gmail.com',
        From : "superkingsely@gmail.com",
        Subject : "Please Attention here A client is trying to contact DriveLink",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('okay')
    sendEmail();
})