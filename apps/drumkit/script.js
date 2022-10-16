const elems = ["SNARE", "RIDE-CYMBAL", "TOM", "FLOOR-TOM", "HIHAT-CYMBAL", "CRASH-CYMBAL", "CLAP", "DSTICKS", "SPARKS"];
const key_codes = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

document.addEventListener("keydown", (event) => {

    const code = event.key;
    let index = key_codes.indexOf(code);
    if (index == -1) {
        return;
    }
    let id = elems[index];
    const butt = document.getElementById(id);
    butt.click();
});


for (let i = 0; i < elems.length; i++) {
    {
        const element = document.getElementById(elems[i]);
        element.addEventListener("click", clicked);
    }
}

function clicked(event) {
    let element = event.target;
    let id = element.id;

    let path = 'assets/sounds/' + id + '.mp3';

    const sound = new Audio(path);
    sound.play();


}