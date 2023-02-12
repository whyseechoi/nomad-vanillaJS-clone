const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/**  버튼 누르면 실행되는 함수 */
function onLoginBtnClick() {
  //이게 지역 변수 설정인가? loginInput에 들어온 값을 변수(username)로 설정
  const username = loginInput.value;
  // loginInput에 아무것도 안 들어있는 경우, 즉 username이 없다는 것.
  if (username === "") {
    alert("please write your name");
    // username의 글자수가 15자보다 많은 경우
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
