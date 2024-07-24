const urlLogin = 'file:///Users/rafaelpaiva/Desktop/JS:HTML:CSS/Site%20Correio/telaLogin.html?#'
const botaoLink = document.getElementById('enviarlink');

botaoLink.addEventListener('click', function(event){

    event.preventDefault();
    var emailCriar = document.getElementById('recuperarmail').value;
    

    if (emailCriar === '') {
        alert('Por favor, Preencha todos os campos.');
    } else {
       document.getElementById('resendlink')
        
        alert('Link enviado para seu email com sucesso!')
        window.open(urlLogin);
       window.location.reload();
       
        }
  
  });