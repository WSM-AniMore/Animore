 const movies = {
    "귀멸의 칼날": "info.html",
    "목소리의 형태": "info1.html",
    "하이큐!! 쓰레기장의 결전": "info2.html",
    "너의 이름은": "info3.html",
    "스즈메의 문단속": "info4.html",
    "시간을 달리는 소녀": "info5.html",
    "우리의 계절은": "info6.html",
    "주술회전": "info7.html"
 }

 function submitForm(event) {
    event.preventDefault();  
    const searchInput = document.getElementById('search-input').value.trim();
    
   
    if (movies[searchInput]) {
        window.location.href = `Info/${movies[searchInput]}`;
    } else {
        alert('해당 영화를 찾을 수 없습니다.');
    }
}

document.getElementById('search-form').addEventListener('submit', submitForm);