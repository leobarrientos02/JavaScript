window.addEventListener( 'load', ()=> {

    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            //const proxy = "https://cors-anywhere.herokupapp.com/";
            const api = `http://api.openweathermap.org/geo/1.0/direct?q=NewYork&limit=5&appid=351ac53b03bd1dc17accd412af9ef2f5`;
            
            let xhr = new XMLHttpRequest();
            xhr.open('GET', api);
            
            // request state change event
            xhr.onreadystatechange = function() {
            
              // request completed?
              if (xhr.readyState !== 4) return;
            
              if (xhr.status === 200) {
                // request successful - show response
                console.log(xhr.responseText);
              }
              else {
                // request error
                console.log('HTTP error', xhr.status, xhr.statusText);
              }
            };
            
            // start request
            xhr.send();

        });
    }else{
        h1.textContent = "This is not working because either you must enable your location or your Browser does not support it.";

    }
});