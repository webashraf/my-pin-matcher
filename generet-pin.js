document.getElementById('generate-pin-btn').addEventListener('click', function(){
randomPin();
})
let totalCode = document.getElementById('type-code-input');
document.getElementById('numbers-btn').addEventListener('click', function(event){
    let typeCode = event.target.innerText;
    if (isNaN(typeCode)) {
     if (typeCode === 'C') {
        totalCode.value = '';
     }
     if(typeCode === '<'){
        const splt = totalCode.value.split('')
        splt.pop();
        const finalValue = splt.join('')
        totalCode.value = finalValue;
     }
    }
    else{
        totalCode.value = totalCode.value + typeCode;
    }

})
document.getElementById('submit-bttn').addEventListener('click', function(){
    const randomCodes = document.getElementById('pin-output');
    if (totalCode.value === randomCodes.value) {
        document.getElementById('match').style.display = 'block';
        document.getElementById('not-match').style.display = 'none'
    }
    else{
        document.getElementById('not-match').style.display = 'block'
        document.getElementById('match').style.display = 'none';
        count++;
    }

})
