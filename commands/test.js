function logConsole() {
    console.log('Ceci est un message test');
}

function logConsole2() {
    console.log('Ceci est un second message de test');
}

module.exports = {
    logConsole: logConsole(),
    logConsole2: logConsole2()
};