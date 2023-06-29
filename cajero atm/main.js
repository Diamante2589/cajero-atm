
//variables

let state ;// me permite ocultar elementos, y solo aparecen si el usuario se valida y aparece  posicion usuario
let  dinero;//crea un variable que se llama estado para controlar  la funcion en html
let x; //control para el  for

//creacion de arreglo para nombre, clave y saldos
const accounts = [
    {  name: "Lucia", balance: 600, password: 'Millonarios560' },
    {  name: "Marcos", balance: 160, password: 'Victoria2023' },
    {  name: "Victor", balance: 68, password: 'Nacional2054' },
    {  name: "Helena", balance: 200, password: 'Dia' },
    {  name: "Fernando", balance: 230, password: 'Colombia189' },
    {  name: "Pedro", balance: 800, password: 'Bogo-ta63' },
    {  name: "Sandra", balance: 900, password: 'Neo' },
    {  name: "Mariana", balance: 16, password: 'Neberpa' },
    {  name: "Valentina", balance: 420, password: 'Amarillo56' },
    {  name: "Johan", balance: 63, password: 'Victoria2023' }
    
  ];

  //bloque para  desaparecer  la  validacion de correo
  document.getElementById("cards").style.display = "none";
  document.getElementById("incorrect_user").style.display = "none";
  document.getElementById("correct_user").style.display = "none";
  document.getElementById("info").style.display = "none";
  

  function enter() {//me permite validar ingresar a las tarjetas en caso de ser valida la clave

    const user = document.getElementById("usuario").value;
    const password = document.getElementById('password').value;
    
    valideUserLogin(user, password);
}
//esta funcion es para validar el usuario
function valideUserLogin (user, key) {
    let userValidate = false;
      for(let x in accounts){
      //for(let x=0, x < accounts.length , x++);
     if(user === accounts[x].name && key === accounts[x].password) {//condicional que me permite verificar si el user y password es correcto
            userValidate = true;
            showMenuHTML(x)//me muestra  el bloque principal(informacion)
            control= x;
            return
        }
    }

    if(!userValidate) {
      document.getElementById("incorrect_user").style.display= "block";
      //me permite que aparezca y color color blanco  en caso de la clave este incorrecta        
      document.getElementById("incorrect_user").style.color = "white";
    }
     // console.log(usuarioValido);
}

 //Esta funcion me permite que aparezca el bloque principal  y desaparezca el bloque de validacion 
function showMenuHTML(control){
  
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("cards").style.display = "block";
    document.getElementById("info").style.display = "block";
    document.getElementById("nombre-usuario").innerText = accounts[control].name;
    document.getElementById("consultar").addEventListener('click', function () {
    document.getElementById("info").innerText = `${accounts[control].name} tu saldo actual es de  ${accounts[control].balance}`;
    } );


}
//funcion para retirar
function withdraw(){
  const withdrawmoneys = document.getElementById("withdrawmoneys").value;//guarda en variable  la info del input
  const total1  = accounts[control].balance - withdrawmoneys //trae el saldo de arreglo y resta el valor guardado en variable
  
  if( total1 < 10){
  document.getElementById("info").innerText =  'El valor a retirar es superior al monto permitido, recuerde que su  saldo no puede ser inferior a  $ 10'; 
  }else{
      document.getElementById("info").innerText = `${accounts[control].name} Tu saldo actual es de $ ${total1} `;
  }
}

//funcion para consignar
function deposit() {

  const depositmoneys = document.getElementById("depositmoneys").value;//guarda en variable  la info del input
  const total2  = Number(accounts[control].balance) + Number(depositmoneys);//trae el saldo de arreglo y resta el valor guardado en variable

  if(total2 > 990){
  document.getElementById("info").innerText = 'Ingresa un valor nuevamente , recuerde que su saldo total no debe superar los $ 990  ' ;
}else{
  document.getElementById("info").innerText =  `${accounts[control].name} Tu saldo actual es de $ ${total2} `;
}
}

//falta actualizar saldo
