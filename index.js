let nombre = "";

while (!nombre) {
    nombre = prompt("Ingrese su nombre");
    
    if (!nombre) {

        alert("Vuelva a ingresar su nombre");

    };
};

alert(`Bienvenido ${nombre}`);

let sumarNotas = confirm("A continuación podrás ver si te encuentras entre los citados al partido, para eso debes tener más de 8 puntos. ¿Quieres agregar tu nota?");

if (!sumarNotas) {
    
    alert(`😁¡¡${nombre} te esperaremos la próxima vez!!😁`);

} else {
    
    function sumarNotasEntrenamiento(nota1, nota2) {
      
        return (nota1 + nota2) / 2;
    
    };
    
    let nota1, nota2;
    
    while (isNaN(nota1) || isNaN(nota2)) {
        nota1 = parseInt(prompt("Ingrese la primera nota"));
        nota2 = parseInt(prompt("Ingrese la segunda nota"));
        
        if (isNaN(nota1) || isNaN(nota2)) {
    
            alert("Por favor, ingrese sus notas");
    
        };
    };
    
    let resultadoEntrenamiento = sumarNotasEntrenamiento(nota1, nota2);
    
    if (resultadoEntrenamiento < 8) {

        alert(resultadoEntrenamiento);
        alert(`👊🏻¡¡A seguir entrenando para la proxima ${nombre}!!👊🏻`);
    
    } else {
    
        alert(resultadoEntrenamiento);
        alert(`🎉¡¡Felicitaciones ${nombre}!! Nos vemos el domingo 19:15hrs🎉`);
    
    };
};