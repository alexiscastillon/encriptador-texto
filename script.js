document.getElementById('process-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const action = document.querySelector('input[name="action"]:checked').value;
    const outputText = document.getElementById('output-text');

    if (action === 'encriptar') {
        outputText.value = encriptar(inputText);
    } else {
        outputText.value = desencriptar(inputText);
    }
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
});

function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
