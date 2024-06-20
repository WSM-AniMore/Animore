const audioPlayer = document.getElementById('audio-player');

const tracks = {
    ost1: 'audio/아무것도아니야.mp3',
    ost2: 'audio/Orange.mp3',
    ost3: 'audio/츠루네.mp3',
    ost4: 'audio/킥백.mp3',
    ost5: 'audio/엘리멘탈.mp3',
    ost6: 'audio/알라딘.mp3',
    ost7: 'audio/코코.mp3',
    ost8: 'audio/tryeverything.mp3',
    oo1: 'audio/세계는사랑에빠져있어.mp3',
    oo2: 'audio/너에게 닿기를.mp3',
    oo3: 'audio/신령님.mp3',
    oo4: 'audio/변하지않는것들.mp3',
    oo5: 'audio/문단속.mp3',
    oo6: 'audio/바람이되어.mp3',
    oo7: 'audio/Tiny Light.mp3',
    oo8: 'audio/거짓말쟁이.mp3',
    oo9: 'audio/이정표.mp3'
};

let currentTrack = '';  // 현재 재생 중인 트랙의 key값을 저장하는 변수 

document.querySelectorAll('.Ost img, .oo').forEach(item => {
    item.addEventListener('click', event => {
        let trackId = event.target.id || event.target.querySelector('img')?.id;
        if (item.classList.contains('oo')) {
            trackId = item.id;
        }

        const trackSrc = tracks[trackId];

        if (currentTrack === trackId) {
            if (audioPlayer.paused) {
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

const OstToggle = () => {
    const ToggleI0 = document.getElementsByClassName("bi-pause-fill")[0];
    const ToggleI1 = document.getElementsByClassName("bi-pause-fill")[1];
    const ToggleI2 = document.getElementsByClassName("bi-pause-fill")[2];
    const ToggleI3 = document.getElementsByClassName("bi-pause-fill")[3];
    const ToggleI4 = document.getElementsByClassName("bi-pause-fill")[4];
    const ToggleI5 = document.getElementsByClassName("bi-pause-fill")[5];
    const ToggleI6 = document.getElementsByClassName("bi-pause-fill")[6];
    const ToggleI7 = document.getElementsByClassName("bi-pause-fill")[7];

    ToggleI0.onclick = () => {
        ToggleI0.classList.toggle("bi-play-fill");
        ToggleI0.classList.toggle("bi-pause-fill");
    }
    ToggleI1.onclick = () => {
        ToggleI1.classList.toggle("bi-play-fill");
        ToggleI1.classList.toggle("bi-pause-fill");
    }
    ToggleI2.onclick = () => {
        ToggleI2.classList.toggle("bi-play-fill");
        ToggleI2.classList.toggle("bi-pause-fill");
    }
    ToggleI3.onclick = () => {
        ToggleI3.classList.toggle("bi-play-fill");
        ToggleI3.classList.toggle("bi-pause-fill");
    }
    ToggleI4.onclick = () => {
        ToggleI4.classList.toggle("bi-play-fill");
        ToggleI4.classList.toggle("bi-pause-fill");
    }
    ToggleI5.onclick = () => {
        ToggleI5.classList.toggle("bi-play-fill");
        ToggleI5.classList.toggle("bi-pause-fill");
    }
    ToggleI6.onclick = () => {
        ToggleI6.classList.toggle("bi-play-fill");
        ToggleI6.classList.toggle("bi-pause-fill");
    }
    ToggleI7.onclick = () => {
        ToggleI7.classList.toggle("bi-play-fill");
        ToggleI7.classList.toggle("bi-pause-fill");
    }
}

OstToggle();
