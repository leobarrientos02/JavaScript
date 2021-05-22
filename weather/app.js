window.addEventListener( 'load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }else{
        h1.textContent = "This is not working because either you must enable your location or your Browser does not support it.";

    }
});