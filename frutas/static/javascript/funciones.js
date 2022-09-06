function burger()
{
  check = document.getElementById('check1').checked;
  if(check == true)
  {
    //alert('true');
    document.getElementById('nav1').style.display = 'table';
  }
  if(check == false)
  {
    //alert('false');
    document.getElementById('nav1').style.display = 'none';
  }
}

function buscador()
{
  if(window.innerWidth < 1001)
  {
    document.getElementById('caja_buscar').style.display = 'none';
    document.getElementById('caja_buscar2').style.display = 'block';
  }
}

function validacion() //Funcion para validar datos correctos en el registro
{
  nom= document.getElementById('nombres').value;
  ape= document.getElementById('apellidos').value;
  ed= document.getElementById('edad').value; 
  usu= document.getElementById('usuario').value;
  con= document.getElementById('contraseña').value;
  cel = document.getElementById('celular').value;
  cor = document.getElementById('correo').value;
  reg = document.getElementById('region').selectedIndex;  
  
  if(nom == null || nom.length==0 || /^\s+$/.test(nom))
  { 
    alert('Error.. debe ingresar sus nombres');
    document.datos.nom.focus();
    return false;  
  }
  if(ape == null || ape.length==0 || /^\s+$/.test(ape))
  {
    alert('Error.. debe ingresar sus apellidos');
    document.datos.ape.focus();
    return false;
  }
    
  if(isNaN(ed) || ed.length == 0)
   {
    alert('Error...debe ingresar una edad válida');
    document.datos.ed.focus();
    return false;
  }
  if(usu == null || usu.length==0 || /^\s+$/.test(usu))
  {
    alert('Error.. debe ingresar su nombre de usuario');
    document.datos.usu.focus();
    return false;
  }
  if(con == null || con.length==0 || /^\s+$/.test(con))
  {
    alert('Error.. debe ingresar su contraseña');
    document.datos.con.focus();
    return false;
  }
  if(!(/^\d{9}$/.test(cel)) )
  {
    alert('Error...debe ingresar un teléfono válido');
    document.datos.cel.focus();
    return false;
  }    
    
  if(cor == null || cor.length==0 || /^\s+$/.test(cor))
  {
    alert('Error.. debe ingresar su correo electronico');
    document.datos.cor.focus();
    return false;
  }
  if (reg == null || reg == 0)
  {
    alert('Seleccione una region');
    document.datos.opciones.focus();
    return false;
  }
  else
  {
    return true; 
  }
}

function Ingresar()
{
  var usu;
  var con;
  usu = document.getElementById('usuario').value;
  con = document.getElementById('contraseña').value;
  if(usu==null || usu.length==0)
  {
    alert('Debe ingresar su nombre de usuario ');
  }
  if(con==null || con.length==0)
  {
    alert('Debe ingresar su contraseña ');
  }
  else
  {
    alert('Hola '+ usu + ', Bienvenido a Músicos Chile');
  }
}

function Salir()
{
  alert('Usted ha cerrado la sesion');
}
      
function cambiar_tema()
{
  alert('true');
}

function mostrar_chat()
{
  if(window.innerWidth < 1001)
  {
    document.getElementById('cajacontactos').style.display = 'none';
    document.getElementById('cajachat').style.display = 'table';

  }
}

function contactar()
{
  
}