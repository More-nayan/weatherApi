 const cityName = document.querySelector('.name');
 const desc = document.querySelector('.disc');
 const temp = document.querySelector('.temp');
 const humidity = document.querySelector('.humidity');
 const inputValue = document.querySelector('.cityName');
 const button = document.querySelector('.sub');


button.addEventListener('click', function(){
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=84f99565db55b71e95dc08231c5dd0e1')
 .then(response => response.json())
 .then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
  var humidValue = data['main']['humidity'];

  let TempV = tempValue - 273;

  cityName.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = TempV.toFixed(2) + "C" ;
  humidity.innerHTML = humidValue;
})
 .catch(err => alert("invalid city name", err));
});



