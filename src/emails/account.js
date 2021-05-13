const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{

    sgMail.send({

        to: email,
        from: 'arjunregmi148@gmail.com',
        subject: 'Thanks for joining us!',
        text:`Hello  ${name}. Be safe from corona virus`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        
    })
}

const sendCancelationEmail = (email, name) => {

    sgMail.send({

        to: email,
        from: 'arjunregmi148@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}.I hope to see you back after sometime soon.`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        
    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
