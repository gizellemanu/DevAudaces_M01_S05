export default class user {
  name;
  email;
  password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  autenticar(emailInformado, informedPassword) {
    return (
      this.email === emailInformado &&
      this.password === informedPassword
    );
  }
}
