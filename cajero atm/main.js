
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
  document.getElementById("user-wrong").style.display = "none";
  document.getElementById("user-ok").style.display = "none";
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
      //for(let x=0, x < accounts.length , x++); se cambia el for por un for in
     if(user === accounts[x].name && key === accounts[x].password) {//condicional que me permite verificar si el user y password es correcto
            userValidate = true;
            showMenuHTML(x)//me muestra  el bloque principal(informacion)
            control= x;//me permite guardar en control el numero de arreglo escogido
            return
        }
    }

    if(!userValidate) {
      document.getElementById("user-wrong").style.display= "block";
      //me permite que aparezca y color color blanco  en caso de la clave este incorrecta        
      document.getElementById("user-wrong").style.color = "white";
    }
     // console.log(usuarioValido);
}

 //Esta funcion me permite que aparezca el bloque principal  y desaparezca el bloque de validacion 
function showMenuHTML(control){
  
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("cards").style.display = "block";
    document.getElementById("info").style.display = "block";
    document.getElementById("user-name").innerText = accounts[control].name;
    document.getElementById("consultar").addEventListener('click', function () {
    document.getElementById("info").innerText = `${accounts[control].name} el saldo en tu cuenta  es \n la suma de $${accounts[control].balance}`;
    } );

//crear variable info-************
}
//funcion para retirar
function withdraw(){
  const withdrawmoneys = document.getElementById("withdrawmoneys").value;//guarda en variable  la info del input
  const total1  = accounts[control].balance - withdrawmoneys //trae el saldo de arreglo y resta el valor guardado en variable
  const total4 =Number(accounts[control].balance)- Number(10);//me informa el saldo que puedo retirar
  if( total1 < 10){
  document.getElementById("info").innerText =  `El valor a retirar es superior al monto permitido, \n recuerde que su  saldo no puede ser inferior a  $ 10`; 
  document.getElementById("info1").innerText =  `El valor maximo permitido a retirar es de ${total4}`; 
  }else{
      document.getElementById("info").innerText = `${accounts[control].name} acabas de hacer un retiro de $ ${withdrawmoneys} \n Tu saldo actual es de $ ${total1} `;
  }
}

//funcion para consignar
function deposit() {

  const depositmoneys = document.getElementById("depositmoneys").value;//guarda en variable  la info del input
  const total2  = Number(accounts[control].balance) + Number(depositmoneys);//trae el saldo de arregloy suma  el valor guardado en variable
  const total3 =Number(990)-Number(accounts[control].balance);
  if(total2 > 990){
  document.getElementById("info").innerText = `Ingresa un valor nuevamente , recuerde que el valor a depositar \n no debe superior el maximo de saldo permitido que es $990` ;
  document.getElementById("info1").innerText = `El valor maximo permitido a consignar es  ${total3} ` ;

}else{
  document.getElementById("info").innerText =  `${accounts[control].name} acabas de hacer una consignacion de $ ${depositmoneys} \n  Tu saldo actual es de $ ${total2} `;
}
}

/*
function refresh(){
  const refresh= document.getElementById("info1").addEventListenerEventListener('dblclick', function (){
    document.getElementById("info1").innerText =style.display = "none";
    }) 
}
*/

