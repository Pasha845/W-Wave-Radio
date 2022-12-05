const modal = new JustValidate('.modal-form', {
  successFieldCssClass: "is-valid",
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    left: "32px",
    top: "9px",
    fontSize: "12px",
    color: '#D11616'
  }
});

modal
.addField('#log', [
  {
    rule: 'minLength',
    value: 3,
  },
  {
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])
.addField('#password', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Пароль слишком короткий'
  },
  {
    rule: 'customRegexp',
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
    errorMessage: 'Пароль слишком простой'
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

.onSuccess(() => {
  document.getElementById('modal').style.visibility = "hidden";
  document.getElementById('modal').style.opacity = 0;
})

const about = new JustValidate('.about__form', {
  successFieldCssClass: "is-valid",
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    left: "32px",
    top: "9px",
    fontSize: "12px",
    color: '#D11616'
  }
});

about
  .addField('#text', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    }
  ])
.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя дожно состоять минимум из 3 символов'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя больше 30 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

.onSuccess(() => {
  document.getElementById('pop-up').style.visibility = "visible";
  document.getElementById('pop-up').style.opacity = 1;
})
