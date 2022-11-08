const modal = new JustValidate('.modal-form', {
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
    rule: 'maxLength',
    value: 30,
  },
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  }
])

const about = new JustValidate('.about__form', {
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
  document.getElementById('popup').style.visibility = "visible";
  document.getElementById('popup').style.opacity = 1;
})
