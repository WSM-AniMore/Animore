const movies = {
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