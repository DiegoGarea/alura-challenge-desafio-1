function encriptar() {
  const texto = document.getElementById('texto').value.toLowerCase();
  const resultado = encriptarTexto(texto);
  document.getElementById('resultado').innerHTML = resultado;
}

function desencriptar() {
  const texto = document.getElementById('texto').value.toLowerCase();
  const resultado = desencriptarTexto(texto);
  document.getElementById('resultado').innerHTML = resultado;
}

function encriptarTexto(texto) {
  return texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
  return texto
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
    .replace(/enter/g, 'e');
}

function copiarEncriptado() {
  const resultadoTexto = document.getElementById('resultado').value;
  const botonCopiar = document.getElementById('btn-copy');

  const tempElement = document.createElement('textarea');
  tempElement.value = resultadoTexto;

  document.body.appendChild(tempElement);

  tempElement.select();
  document.execCommand('copy');

  document.body.removeChild(tempElement);

  botonCopiar.innerHTML = 'Copiado!';
  setTimeout(() => {
    botonCopiar.innerHTML = 'Copiar';
  }, 3000);
}
