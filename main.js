 function chagePeople(){
      document.getElementById('content').style.display='block';
      document.getElementById('gif').style.display='none';
      document.getElementById('seeMore').style.display='block';
      document.getElementById('personajes').style.display='none';
     document.getElementById('inicio').style.display='none';
     document.getElementById('play').style.display='none';

   }
document.getElementById('play').addEventListener('click',chagePeople);

function personajes(){
  document.getElementById('content').style.display='none';
  document.getElementById('gif').style.display='none';
  document.getElementById('btnInicio').style.display='none';
  document.getElementById('play').style.display='block';
  document.getElementById('personajes').style.display='block';
  
}
document.getElementById('seeMore').addEventListener('click',personajes);
