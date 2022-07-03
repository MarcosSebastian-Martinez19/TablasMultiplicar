/* Tabla de multiplicar del 0 al 10 */

document.write("Tablas de Multiplicar del 0 al 10" + "<br>")

for (let i = 0; i <= 10; i++) {
    document.write("<br>" + "La tabla del " + i + " es: " + "<br>")
    for(let j = 0; j <= 10; j++) {
        if(i * j <= 100) {
            document.write("<br>" + i + " x " + j + " = " + (i * j))
        }
    }
    document.write("<br>")
}