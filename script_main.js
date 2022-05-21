const view = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)));
if (!view) {
    //code here to add the app image previews to the articles
    let para1 = document.getElementById("7402");
    let image_cipher = document.createElement("img");
    image_cipher.src = "images/cipherEG.png";
    image_cipher.width = 600;
    image_cipher.height = 450;

    para1.appendChild(image_cipher);
    let para2 = document.getElementById("7403");
    let image_chainR = document.createElement("img");
    image_chainR.src = "images/chainEG.png";
    image_chainR.width = 600;
    image_chainR.height = 450;
    para2.appendChild(image_chainR);
}