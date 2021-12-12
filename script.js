let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');
let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');
let s10 = document.getElementById('s10');

let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');
let h5 = document.getElementById('h5');
let h6 = document.getElementById('h6');
let h7 = document.getElementById('h7');
let h8 = document.getElementById('h8');
let h9 = document.getElementById('h9');
let h10 = document.getElementById('h10');

let backward = document.getElementById('backward');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let forward = document.getElementById('forward');
let songs = ['raatan.mp3', 'ranjha.mp3', 'pal.mp3', 'raabata.mp3', 'sakhiyan.mp3', 'burj.mp3', 'o-saathi.mp3', 'besabriyan.mp3', 'param.mp3', 'ram.mp3'];
let showVar = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
let hideVar = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10];

let index = 0;

let song = new Audio(songs[index]);

let progressBar = document.getElementById('progressBar');

backward.addEventListener('click', () => {
    song.pause();
    song = new Audio(songs[index -= 1]);
    song.play();
    song.addEventListener('timeupdate', () => {
        let progress = parseFloat((song.currentTime / song.duration) * 100);
        progressBar.value = progress;
    })
    
    progressBar.addEventListener('change', () => {
        song.currentTime = progressBar.value * song.duration / 100;
    })
    play.style.display = 'none';
    pause.style.display = 'block';
    showVar[index].style.display = 'none';
    hideVar[index].style.display = 'block';
    showVar[index + 1].style.display = 'block';
    hideVar[index + 1].style.display = 'none';
})

play.addEventListener('click', () => {
    song.play();
    song.addEventListener('timeupdate', () => {
        let progress = parseFloat((song.currentTime / song.duration) * 100);
        progressBar.value = progress;
    })
    
    progressBar.addEventListener('change', () => {
        song.currentTime = progressBar.value * song.duration / 100;
    })
    play.style.display = 'none';
    pause.style.display = 'block';
    showVar[index].style.display = 'none';
    hideVar[index].style.display = 'block';
});

pause.addEventListener('click', () => {
    song.pause();
    pause.style.display = 'none';
    play.style.display = 'block';
    showVar[index].style.display = 'block';
    hideVar[index].style.display = 'none';
})

forward.addEventListener('click', () => {
    song.pause();
    song = new Audio(songs[index += 1]);
    song.play();
    song.addEventListener('timeupdate', () => {
        let progress = parseFloat((song.currentTime / song.duration) * 100);
        progressBar.value = progress;
    })
    
    progressBar.addEventListener('change', () => {
        song.currentTime = progressBar.value * song.duration / 100;
    })
    play.style.display = 'none';
    pause.style.display = 'block';
    showVar[index].style.display = 'none';
    hideVar[index].style.display = 'block';
    showVar[index - 1].style.display = 'block';
    hideVar[index - 1].style.display = 'none';
})

for (let i = 0; i < songs.length; i++) {
    showVar[i].addEventListener('click', () => {
        song.pause();
        showVar[i].style.display = 'none';
        song = new Audio(songs[i]);
        hideVar[i].style.display = 'block';
        song.play();
        song.addEventListener('timeupdate', () => {
            let progress = parseFloat((song.currentTime / song.duration) * 100);
            progressBar.value = progress;
        })
        
        progressBar.addEventListener('change', () => {
            song.currentTime = progressBar.value * song.duration / 100;
        })
        play.style.display = 'none';
        pause.style.display = 'block';
        index = i;

        if (hideVar[i].style.display = 'block') {
            for (let j = 0; j < songs.length; j++) {
                showVar[j].addEventListener('click', () => {
                    hideVar[i].style.display = 'none';
                    showVar[i].style.display = 'block';
                })
                showVar[i].addEventListener('click', () => {
                    showVar[i].style.display = 'none';
                    hideVar[i].style.display = 'block';
                })
            }
        }
    })

    hideVar[i].addEventListener('click', () => {
        song.pause();
        showVar[i].style.display = 'block';
        hideVar[i].style.display = 'none';
        song.pause();
        play.style.display = 'block';
        pause.style.display = 'none';
        index = i;
    })
}
