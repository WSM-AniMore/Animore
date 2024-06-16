 const movies = {
    "귀멸의 칼날": "info.html",
    "목소리의 형태": "info1.html",
    "하이큐!! 쓰레기장의 결전": "info2.html",
    "너의 이름은": "info3.html",
    "스즈메의 문단속": "info4.html",
    "시간을 달리는 소녀": "info5.html",
    "우리의 계절은": "info6.html",
    "주술회전": "info7.html",
    "인사이드아웃2": "info2-1.html",
    "업": "info2-2.html",
    "라푼젤": "info2-3.html",
    "토이스토리3": "info2-4.html",
    "코코": "info2-5.html",
    "카3": "info2-6.html",
    "주먹왕 랄프": "info2-7.html",
    "칩과 데일:다람쥐 구조대": "info2-8.html",
    "엘리멘탈": "info3-1.html",
    "모아나": "info3-2.html",
    "빅 히어로": "info3-3.html",
    "인어공주": "info3-4.html",
    "위시": "info3-5.html",
    "알라딘": "info3-6.html",
    "뮬란": "info3-7.html",
    "메리다와 마법의 숲": "info3-8.html"
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



