let imprimirTriangulo = () =>
{
    for (let i = 0; i < 5; i++) {
        let fila="";
        for (let j = 0; j <= i; j++) {
            fila= fila + "*";
        }
        console.log(fila);
    }
}
imprimirTriangulo();