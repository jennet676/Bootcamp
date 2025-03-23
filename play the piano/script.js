const keys = document.querySelectorAll('.key');

const soundMap = {
    'C': 'a6-82015.mp3',
    'C#': 'a6-102820.mp3',
    'D': 'b6-82017.mp3',
    'D#': 'piano-g-6200.mp3',
    'E': 'piano-g-6200.mp3',
    'F': 'c6-102822.mp3',
    'F#': 'd6-82018.mp3',
    'G': 'd6-82020.mp3',
    'G#': 'e6-82016.mp3',
    'A': 'e6-82016.mp3',
    'A#': 'f6-102819.mp3',
    'B': 'g6-82013.mp3',
    'C2': 'g6-82014.mp3'
};

function playSound(note, key) {
    if (!key || !soundMap[note]) return;
    const audio = new Audio(`sounds/${soundMap[note]}`);
    key.classList.add('active');
    audio.play();
    
    audio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}

keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        const note = key.getAttribute('data-note');
        playSound(note, key);
    });
    
    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });
    
    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});

document.addEventListener('keydown', event => {
    let note;
    switch (event.key.toLowerCase()) {
        case 'a': note = 'C'; break;
        case 'w': note = 'C#'; break;
        case 's': note = 'D'; break;
        case 'e': note = 'D#'; break;
        case 'd': note = 'E'; break;
        case 'f': note = 'F'; break;
        case 't': note = 'F#'; break;
        case 'g': note = 'G'; break;
        case 'y': note = 'G#'; break;
        case 'h': note = 'A'; break;
        case 'u': note = 'A#'; break;
        case 'j': note = 'B'; break;
        case 'k': note = 'C2'; break;
        default: return;
    }
    const key = document.querySelector(`.key[data-note='${note}']`);
    playSound(note, key);
});
