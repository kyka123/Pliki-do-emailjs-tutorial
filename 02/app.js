const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // sendForm(e);
  // sendFormUsingApiCall(e);
});

function sendForm(e) {
  window.emailjs
    .sendForm(
      "gmail",
      "zapytanie_z_formularza",
      e.target /*albo po prostu "#form"*/,
      "user_7UmOln4rmGnWztCUbINrT"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function sendFormUsingApiCall(e) {
  const formData = new FormData(e.target);
  formData.append("service_id", "gmail");
  formData.append("template_id", "zapytanie_z_formularza");
  formData.append("user_id", "user_7UmOln4rmGnWztCUbINrT");
  axios
    .post("https://api.emailjs.com/api/v1.0/email/send-form", formData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
