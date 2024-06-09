document.getElementById('login-form').addEventListener("submit", function(event){
    event.preventDefault(); // 기본 제출 동작 방지

    const userName = document.getElementById('user-name').value;
    const password = document.getElementById('password').value;

    console.log("사용자 이름: ", userName);
    console.log("비밀번호: ", password);

    alert(`${userName}님 환영합니다`);
    location.replace('index.html');
});
