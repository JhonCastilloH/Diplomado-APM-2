var info = document.getElementById('acceleration-info');

console.log('Escuchando un evento del tipo click');

function getAcceleration(){
    console.log('getAcceleration -> Ok');
    info.innerHTML = '';
    // Obteniendo la orientacion del dispositivo
    alert('GetAcceleration Ok!');
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onAccelerationError); //encuentra la aceleracion en x y z del dispositivo
}

function onAccelerationSuccess(acceleration){  //metodo se ejecuta si el device tiene acelerometro OK
    var date = new Date(acceleration.timestamp);
    info.innerHTML = '<b>Aceleración en X: ' + acceleration.x + '<br />' +
                     '<b>Aceleración en Y: ' + acceleration.y + '<br />' +
                    '<b>Aceleración en Z: ' + acceleration.z + '<br />' +
                     '<b>timestamp: ' + date.toLocaleString() + '<br />';
}

function onAccelerationError(){     //metodo se ejecuta si el device no tiene acelerometro OK
    console.log('Error en el acelerometro');
    alert('Error en el acelerometro');
}