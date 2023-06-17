function adivinaElNumero () {
    let NumeroAleatorio = Math.ceil(Math.random()*10); //Generando un número entero aleatorio entre 1 y un máximo
    let NumeroDeIntentos = 0;
    let nombre = prompt('ingresa tu nombre ')

    for (let NumeroDeIntentos = 0; NumeroDeIntentos < 3; NumeroDeIntentos++) {
        let NumeroIngresado = parseInt(prompt('Ingrese un numero del 1 al 10'));
        console.log(NumeroAleatorio)
                    if (NumeroIngresado < 10 && NumeroIngresado >= 0) {
                    alert('esta en el rango')
                        if (NumeroDeIntentos > 1) {
                            alert('perdiste, superaste los intentos y el numero no es correcto')
                            break
                        }
                        if (NumeroIngresado != NumeroAleatorio && NumeroDeIntentos < 3) {
                            alert('sigue intentando')
                            }
                        
                        else{
                            alert('Ganaste el juego')
                            break
                            }
                    }
                    else {
                        alert('no esta en el rango');
                    }
                }
};
adivinaElNumero();







