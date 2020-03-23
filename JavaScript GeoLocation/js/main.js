//how to use Navigator.GeoLocation

var g,options,spans;
document.addEventListener('DOMContentLoaded',init);

function init()
{
  //geolocation ask for accesing the person location
  //if Browser has GeoLocation property
  if(navigator.geolocation)
  {
    var giveUp=1000*30;     //30sec
    let tooOld=1000*60*60;  //1 hour
    options=
    {
        enableHighAcuuracy:true,
        timeout:giveUp,     //for how much time the location is accessible
        maximumAge:tooOld
    }
    navigator.geolocation.getCurrentPosition(gotPos,posFail,options);
  }
  else
  {
    //using an old browser
  }
}

function gotPos(position){
  spans=document.querySelectorAll('p span');
  spans[0].textContent=position.coords.latitude;
  spans[1].textContent=position.coords.longitude;
  spans[2].textContent=position.coords.accuracy;
  
  spans[6].textContent=position.timestamp;
}
function posFail(err){
  //err is a number 1 2 3

  let errors={
    1:"No Permission",
    2:"Unable to determine",
    3:"Took Too Long"
  }
  document.querySelector('h1').textContent=errors[err];
}
