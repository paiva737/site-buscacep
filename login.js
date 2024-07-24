const botaoRegistrar = document.getElementById('registrar');
const esqueciSenha = document.getElementById('esqueci');
const urlCadastro = 'file:///Users/rafaelpaiva/Desktop/JS:HTML:CSS/Site%20Correio/cadastro.html';
const urlEsqueciSenha = 'file:///Users/rafaelpaiva/Desktop/JS:HTML:CSS/Site%20Correio/esquecisenha.html';
const urlHome = 'file:///Users/rafaelpaiva/Desktop/JS:HTML:CSS/Site%20Correio/menuhome.html?';
const botaoEntra = document.getElementById('entrar');


function validaSenha(){
    const regex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#@%&]).{6,15}$/;
    if(regex.test(senha.value)){
        console.log(senha.value);
    }else{
        alert("Senha inválida, Precisa ter no minimo um numero, uma letra maiuscula, minuscula e caractere especial");
    }
}

botaoRegistrar.addEventListener('click',function(){
    window.open(urlCadastro);
});

esqueciSenha.addEventListener('click', function(){
    window.open(urlEsqueciSenha);
})

botaoEntra.addEventListener('click', function(event){
    event.preventDefault();
    
    var espacoEmail = document.getElementById('mail').value;
    var espacoSenha = document.getElementById('senha').value;
    if (espacoEmail === '' || espacoSenha === ''){
        alert('Por favor, Preencha todos os campos.');
    } else {
        document.getElementById('formlogin');
     validaSenha();
      window.open(urlHome)
      window.location.reload();
    }
})
   
   