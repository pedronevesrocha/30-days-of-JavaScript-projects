var password = document.getElementeById('password')
function genPassword() {
    var chars = '0123456789qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGCVHBJNKMLÇ!@#$%¨&*()'
    var passwordLength = 12
    var password = ''
    for (var i = 0; i <= passwordLength; i++) {
        password += chars.substring(randomNumber, randomNumber + 1)
    } 
    document.getElementById('password').value = password
}
function copyPassword() {
    var copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
}