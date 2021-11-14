setInterval(() => {
    let time = new Date();
    let houres = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    document.querySelector("#houres").innerText = leadingZero(houres);
    document.querySelector("#minutes").innerText = leadingZero(minutes);
    document.querySelector("#seconds").innerText = leadingZero(seconds);
} , 1000);
function leadingZero(num)
{
    if(num<=9)
    {
        return "0" + num;
    }
    else
    {
        return num;
    }
}