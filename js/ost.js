//audioPlayer : 재생/일시정지 하기 위해서
const audioPlayer = document.getElementById('audio-player');

const tracks = {
    ost1: 'audio/아무것도아니야.mp3',
    ost2: 'audio/Orange.mp3',
    ost3: 'audio/츠루네.mp3',
    ost4: 'audio/킥백.mp3'
};

let currentTrack = '';  //현재 재생 중인 특랙의 key값을 저장하는 변수 

document.querySelectorAll('.Ost img').forEach(item => {
    item.addEventListener('click', event => {
        const trackId = event.target.id;
        const trackSrc = tracks[trackId];

        if (currentTrack === trackId) {
            
            if (audioPlayer.paused) { //paused = true : 일시 정지 상태임
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        } else {
            
            audioPlayer.src = trackSrc;
            audioPlayer.play();
            currentTrack = trackId;
        }
    });
});
