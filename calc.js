
var bienvenida = alert("Bienvenido a Calculator 1.0! esta es una calculadora básica para operaciones prácticas de dós números")
var numerox = parseFloat(prompt("Valor de X"));
var numeroy =parseFloat(prompt("Valor de y"));
var operacion = prompt("¿Qué operación desea realizar con los números anteriores? (+,-,/,x)");
var resultado;


if(operacion == "+")
{
    
    resultado = numerox + numeroy;
    document.write("Resultado: <strong>" + resultado + "</strong>");
}

else if(operacion == "-")
{
    
    resultado = numerox - numeroy;
    document.write("Resultado: <strong>" + resultado + "</strong>");
}

else if(operacion == "/")
{
    
    resultado = numerox / numeroy;
    document.write("Resultado: <strong>" + resultado + "</strong>");
}

else if(operacion == "x")
{
    
    resultado = numerox * numeroy;
    document.write("Resultado: <strong>" + resultado + "</strong>");
}

else 
{
    alert("Por favor escriba correctamente los datos...")
}