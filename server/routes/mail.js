const mailer = require("nodemailer")

const getEmailData = (to, name, template ) => {
    data = null;

    switch (template) {
        case "hello" :
        data = {
            from: "Contact Form",
            to,
            subject:{name},
        }
    }
      

}


const sendEmail = (to, name, type) => {


    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "roarsintheeast@gmail.com",
            pass: "12345"
        }
    })
}


const mail = getEmailData(to, name, type)