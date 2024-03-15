function submit() {
    const length = parseInt(document.getElementById("input1").value);
    const includeNumericals = document.getElementById("numericals").checked;
    const includeUpper = document.getElementById("Upper").checked;
    const includeLower = document.getElementById("Lower").checked;
    const includeSpecial = document.getElementById("special").checked;
    const randomPass = generatePassword(length, includeNumericals, includeUpper, includeLower, includeSpecial);
    document.getElementById("output").value = randomPass;
}
const Upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const Lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const num = ['1','2','3','4','5','6','7','8','9','0'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', '/', '?', ',', '.'];
const password = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', '/', '?', ',', '.'];

function generatePassword(length, includeNumericals, includeUpper, includeLower, includeSpecial) { // Include includeSpecial as an argument
    let charset = [];
    if (includeNumericals){
        charset = charset.concat(num);
    }
    if (includeUpper){
        charset = charset.concat(Upper);
    }
    if (includeLower){
        charset = charset.concat(Lower);
    }
    if (includeSpecial){
        charset = charset.concat(special);
    }
    if (charset.length === 0){
        charset = password;
    }
    let randomPassword = '';
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomPassword += charset[randomIndex];
    }
    return randomPassword;
}
function copy() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }