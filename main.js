const i = 0;

function colorGenerate() {

    //generated the random number using math function and multiplied by 1677...to get in a hexadecimal format.
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16); //as color code always be in # format so concatinated it with the random number and also converted the random number into string so that concatination can performed.
    document.body.style.backgroundColor = randomCode //changing the color code at css.
    document.getElementById("color-code").innerText = randomCode; //changing the color code text generating above the button.
    navigator.clipboard.writeText(randomCode) //copying the colorcode when user click on the button
    document.getElementById("copytext").innerText = "Color Code " + randomCode.toString(16) + " is Copied! Now You can Use"  //changing the below text

    i = i + 1; //just incrementing it so that we can can function colorGenerate.
}

document.getElementById("btn").addEventListener('click', colorGenerate); //added event listner in the button and event function call.

if (i > 0) //at the beginning when we open the website the below text will not show after the first click below text will start showing which code is copied.
    colorGenerate() //initial call - refresh karne se ak color to dikhega hi dikhega.