const navToggle = () => {
    // 햄버거 메뉴, 닫기
    const hamburgerButton = document.getElementById('nav-toggle');

    // 아이콘 가져오기
    const hamburgerIcon = hamburgerButton.getElementsByTagName('i')[0];// 첫 번째 <i> 요소 선택

    // 메뉴 리스트
    const navList = document.getElementsByClassName('nav-menu')[0];

    hamburgerButton.onclick = () => {
        navList.classList.toggle("toggleActive");

        // 아이콘 변경
       hamburgerIcon.classList.toggle("bi-list");
       hamburgerIcon.classList.toggle("bi-x-lg");
 
    }
}

navToggle();
