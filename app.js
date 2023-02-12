const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

/**  submit이 되면 실행되는 함수 */
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
