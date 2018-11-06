function limpar()
{
     document.getElementById("SenhaCadastro").value = "";
     document.getElementById("SenhaCadastroConfirm").value = "";
     document.getElementById("EmailCadastro").value = "";
     document.getElementById("EmailLogin").value = "";
     document.getElementById("SenhaLogin").value = "";
}
function mostrar(div_mostrar)
{
 if(div_mostrar == "2")
 {
     document.getElementById("cadastro").className = "login";
     document.getElementById("login-div").className = "invisivel";
 }
 if(div_mostrar == "1")
 {
    document.getElementById("cadastro").className = "invisivel";
    document.getElementById("login-div").className = "login";
 }
}

var vetor = [];
var SenhasIguais = false;
class Usuario
{
constructor()
{
this.email;
this.senha;
this.primeira
}
entrada()
{
 var Senha = document.getElementById("SenhaCadastro").value;
 var SenhaConfirm = document.getElementById("SenhaCadastroConfirm").value;
this.email=document.getElementById("EmailCadastro").value;
this.primeira=document.getElementById("primeiroano")
if(Senha == SenhaConfirm)
 {
     this.senha = Senha;
     SenhasIguais = true;
     if(Senha.length <= 5)
     {
      SenhasIguais=false;
      alert('As senhas devem conter pelomenos 6 digitos')
     }
 }
 else
 {
     alert("As senhas não são iguais");
     SenhasIguais = false;
 }
}
}
var user = new Usuario();

function cadastro()
{
 user.entrada();
 vetor.push(user);
 var ultimoAdd = vetor.length - 1;
if(SenhasIguais)
{
 alert("Email: "+vetor[ultimoAdd].email+" cadastrado com sucesso!");
 limpar();
}
else
{
 alert("Informe as senhas corretamente para o cadastro");
}
}

function  login()
{
  var nome_login,senha_login;
  nome_login = document.getElementById("EmailLogin").value;
  senha_login= document.getElementById("SenhaLogin").value;
  var nome_confere = false, senha_confere = false;
  for(var i=0;i<vetor.length;i++)
  {
   if( vetor[i].email == nome_login)
       {

        nome_confere = true;
        if(vetor[i].senha == senha_login)
        {
          senha_confere = true;
        }
       
      }
  }
  if(nome_confere && senha_confere)
  {
    document.getElementById("cadastro").className = "invisivel";
    document.getElementById("login-div").className = "invisivel";
    location.href="primeiroano.html"


  }
  else
  {
    alert("Usuário ou senha inválidos");
  }
  limpar();
}