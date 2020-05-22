// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const question = document.getElementById("question");
const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    const [name, email, question] = e.srcElement
    if (validate(name.value, email.value, question.value)) {
        send(name.value, email.value, question.value)
        clearInputs([name, email, question])
    }
})

function clearInputs(inputs) {
    inputs.forEach(element => (element.value = ''))
}

function validate(name, email, question) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!name) return false
    if (!re.test(email)) return false
    if (!question) return false
    return true
}

function sendEmail(params) {
    const service = 'gmail'
    const templateId = 'zapytanie_z_formularza'
    const user_id = 'user_7UmOln4rmGnWztCUbINrT'
    window.emailjs
        .send(service, templateId, params, user_id)
        .then(() => console.log('Email Wysłany pomyślnie'))
        .catch(err => throwError(err))
        .finally(() => setLoading(false))
}

function send(name, email, question) {
    setLoading(true)
    const clientParams = {
        to_email: email,
        from_name: 'Krzysztof Kasprzyk',
        subject: `Formularz Zadaj pytanie`,
        content: `
      <h1>Cześć, ${name}</h1>
      <p>Dzięki, że zadałeś bardzo ciekawe pytanie w formularzu</p>
      <p>pytanie: ${question}</p>
      <p>Serdercznie Pozdrawam, Krzysztof Kasprzyk</p>
    `,
    }

    const myParams = {
        to_email: `krzysztofkasprzyk.kyka123@gmail.com`,
        from_name: name,
        subject: `Ktoś zadał pytanie w tym twoim formularzu`,
        content: `
    <h1>Szybko odpisz</h1>
    <p>imię: ${name}</p>
    <p>email: ${email}</p>
    <p>pytanie: ${question}</p>
    <p>Chyba on pozdrawia</p>
    `,
    }
    sendEmail(clientParams)
    sendEmail(myParams)
}

function throwError(type) {
    console.log(type)
    alert('Błąd servera')
}

function setLoading(loading) {
    document.getElementById('submit').innerHTML = loading ? 'Loading...' : 'Wyślij'
}
