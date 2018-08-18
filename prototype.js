const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
                  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',];

const reg = /^[a-z]+$/i;

const casearCipher = () => {
    let str = document.getElementsByClassName('str')[0].value;
    let key = document.getElementsByClassName('key')[0].value;
    let option = document.getElementsByClassName('crypt-type')[0].value;
    
    if (str.length >= 1 && key <= 25) {
        str = str.split('');
        for (let i = 0; i < str.length; i++) {
            if (str[i].match(reg)) {
                if (option === 'Encrypt') {
                    str[i] = alphabet.indexOf(str[i]) + parseInt(key);
                } 
                else if (option === 'Decrypt') {
                    str[i] = alphabet.indexOf(str[i]) + 26 - parseInt(key);
                } 
                else { alert('invalid option') }
                str[i] = alphabet[str[i]];
            }
        }
        str = str.join('');
    } else {alert('invalid attribute. Enter the text and enter key value less than 26')}
    
    document.getElementsByClassName('cipher-result')[0].value = str;
}

enc.addEventListener("click", casearCipher);