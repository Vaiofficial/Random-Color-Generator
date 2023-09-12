const i = 0;

function colorGenerate() {

    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber , randomCode);
    document.body.style.backgroundColor = randomCode
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode)
    document.getElementById("copytext").innerText = "Color Code " + randomCode.toString(16) + " is Copied! Now You can Use"
    i = i + 1;
}

document.getElementById("btn").addEventListener('click', colorGenerate);

if (i > 0)
    colorGenerate()