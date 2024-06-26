function checkInventory() {
    const selectElement = document.getElementById('cinemaSelect');
    const selectedCinema = selectElement.value;
    const inventoryStatus = document.getElementById('inventoryStatus');
    const statusMessage = document.getElementById('statusMessage');

    if (selectedCinema) {
        inventoryStatus.classList.remove('hidden');
        statusMessage.textContent = '재고 정보를 불러오는 중...';


        setTimeout(() => {

            const inventoryData = {
                cinema1: '특전이 충분합니다.',
                cinema2: '특전이 5개 남았습니다. (5/100)',
                cinema3: '특전이 소진되었습니다. (0/100)',
                cinema4: '특전이 소진되었습니다. (0/100)',
                cinema5: '특전이 충분합니다.',
                cinema6: '특전이 51개 남았습니다. (51/70)',
                cinema7: '특전이 32개 남았습니다. (32/100)',
                cinema8: '특전이 소진되었습니다. (0/30)',
                cinema9: '특전이 80개 남았습니다. (80/120)',
                cinema10: '특전이 충분합니다.'
            };

            statusMessage.textContent = inventoryData[selectedCinema] || '재고 정보를 불러올 수 없습니다.';
        }, 1000);
    } else {
        inventoryStatus.classList.add('hidden');
    }
}