function randomPin(){
    const randomPin = Math.round(Math.random() * 10000)
    const pinStr = randomPin + '';
    if (pinStr.length === 4) {
        document.getElementById('pin-output').value = randomPin;
    }
    else{
        randomPin();
    }
}