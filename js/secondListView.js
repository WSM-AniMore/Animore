const movies = {
    "인사이드아웃2": "info2-1.html",
    "업": "info2-2.html",
    "라푼젤": "info2-3.html",
    "토이스토리3": "info2-4.html",
    "코코": "info2-5.html",
    "카3": "info2-6.html",
    "주먹왕 랄프": "info2-7.html",
    "칩과 데일:다람쥐 구조대": "info2-8.html"
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