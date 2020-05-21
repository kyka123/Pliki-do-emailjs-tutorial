const template_params = {
    email: 'kyka123@op.pl',
    name: 'Jakieś imię',
    message: 'question_value',
}

const sendEmail = () => {
    emailjs
        .send('gmail', 'zapytanie_z_formularza', template_params, 'user_7UmOln4rmGnWztCUbINrT')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

function sendEmailUsingApiCall() {
    const data = {
        service_id: 'gmail',
        template_id: 'zapytanie_z_formularza',
        user_id: 'user_7UmOln4rmGnWztCUbINrT',
        template_params: template_params,
    }

    axios
        .post('https://api.emailjs.com/api/v1.0/email/send', data)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}
