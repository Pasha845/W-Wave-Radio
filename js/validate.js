new JustValidate('.modal-form')
.addField('#text', [
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

const validation = new JustValidate('.about__form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  }
});

validation
  .addField('#text', [
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
.addField('#name', [
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
