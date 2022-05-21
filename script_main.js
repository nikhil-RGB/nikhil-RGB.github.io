const view = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)));
if (view) {
    //code to remove image preview in case the user is on a mobile device
    let min = 710;
    let max = 711;
    for (let i = 0; min <= max; ++min, ++i) {
        let parent = document.getElementById(i + "");
        let element = document.getElementById(min + "");
        parent.removeChild(element);
    }
}