//Complete siguiendo las instrucciones del taller
let {defineSupportCode} = require('cucumber');
let {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I try to login', () => {
    let cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     let cajaLogIn = browser.element('.cajaLogIn');

    let mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    let passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });

  Then('I expect to see {string}', (error) => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    let alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);

  });

  Then('I expect visibility of {string}', (element) => {
    browser.waitForVisible(element, 5000);
  });

  When(/^I fill sign up info with (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/ ,
  (name, last_name, email, university, program, password, accepting_terms) => {
    let cajaSignUp = browser.element('.cajaSignUp');

    if (name) {
      let nameInput = cajaSignUp.element('input[name="nombre"]');
      nameInput.click();
      nameInput.keys(name);
    }

    if (last_name) {
      let lastNameInput = cajaSignUp.element('input[name="apellido"]');
      lastNameInput.click();
      lastNameInput.keys(last_name);
    }
    if (email) {
      let mailInput = cajaSignUp.element('input[name="correo"]');
      mailInput.click();
      mailInput.keys(email);
    }
    if (password) {
      let passwordInput = cajaSignUp.element('input[name="password"]');
      passwordInput.click();
      passwordInput.keys(password);
    }
    if (accepting_terms == "true") {
      let acceptInput = cajaSignUp.element('input[name="acepta"]');
      acceptInput.click();
    }
    if (university) {
      cajaSignUp.waitForVisible('select[name="idUniversidad"]', 5000);
      cajaSignUp.selectByVisibleText('select[name="idUniversidad"]', university);
    }
    if (program) {
      cajaSignUp.waitForVisible('select[name="idPrograma"]', 5000);
      cajaSignUp.selectByVisibleText('select[name="idPrograma"]', program);
    }
  });

  When('I try to register', () => {
    let cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click();
  });

  Then('{string} fields should fail', (fields) => {
    fields = fields.split(",");
    let cajaSignUp = browser.element('.cajaSignUp');
    if (fields.includes("name")) {
      browser.waitForVisible('.has-error input[name="nombre"]', 5000);
    }
    if (fields.includes("last_name")) {
      browser.waitForVisible('.has-error input[name="apellido"]', 5000);
    }
    if (fields.includes("email")) {
      browser.waitForVisible('.has-error input[name="correo"]', 5000);
      expect(cajaSignUp.element('.aviso.alert.alert-danger')
          .getText()).to.include("correo");
    }
    if (fields.includes("university")) {
      browser.waitForVisible('.has-error select[name="idUniversidad"]', 5000);
    }
    if (fields.includes("program")) {
      browser.waitForVisible('.has-error select[name="idPrograma"]', 5000);
    }
    if (fields.includes("password")) {
      browser.waitForVisible('.has-error input[name="password"]', 5000);
      expect(cajaSignUp.element('.aviso.alert.alert-danger')
          .getText()).to.include("Ingresa una contraseña");
    }
    if (fields.includes("accepting_terms")) {
      expect(cajaSignUp.element('.aviso.alert.alert-danger')
          .getText()).to.include("Debes aceptar los términos y condiciones");
    }
  });
  Then('I expect error: existing {string}', (email) => {
    browser.waitForVisible('.sweet-alert', 5000);
    let alertText = browser.element('.sweet-alert').getText();
    expect(alertText).to.include(email);
    expect(alertText).to.include('Ya existe un usuario registrado con el correo');
  });
});
