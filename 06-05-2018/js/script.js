/*
    document.getElementById("id")  => Te agarra el elemento que tenga el id
    document.getElementsByClassName("class") => Te agarra los elementos que tengan la clase la clase
*/
var texto = [
    `Allí, agentes de la fuerza que dirige el prefecto general Eduardo Scarzello, observaron una camioneta que circulaba con las luces apagadas a gran velocidad en dirección a la Ruta Nacional Nº 12, lo que despertó la sospecha de la Prefectura. La secuencia derivó en una persecución en la Ruta Provincial Nº 18, finalizando su recorrido dentro del predio de un aserradero. Inmediatamente, se montó un perímetro de seguridad y se visualizó que al costado de la camioneta y sobre su caja había varios bultos.`, 
    `Fue con la orden del Juzgado Federal de Primera Instancia de la ciudad de Eldorado a cargo del Dr. Miguel Ángel Guerrero, y la colaboración del can "Drako" que durante el allanamiento se secuestraron, además del vehículo, 81 bultos que contenían 1859 panes de marihuana por un peso de 1711,837 kilos y un valor superior a los 38.500.000 de pesos. Además una personas fue detenida en el lugar. En tanto en Paso de la Patria, Corrientes, efectivos que realizaban un patrullaje de rutina en tareas de prevención de ilícitos a la altura del kilómetro 1238 del río Paraná, incautaron diez bolsas de arpillera que contenían 338 panes de marihuana con un peso de 245,310 kilos y un valor de 5.438.522 pesos.`,
];

var texto2 = [
    `Al ser consultado en el ciclo Modo Sábado de Radio Nacional si muchas chicas lo buscan para conocerse, contó: "Instagram es para eso. Yo soy medio queso con el Instagram, no termino de encontrarle la onda. Me gusta sacar fotos, sobre todo artísticas, y me parece genial para comunicar lo que estoy haciendo, promocionando la obra".`, 
    `Efectivamente, al contrario de lo que hacen muchos actores y personajes públicos, Noher elige la discreción en las redes sociales. En su perfil en Instagram la mayoría de las fotos son de paisajes, de la naturaleza, o promociones de El Hijo Eterno, su próxima obra que se podrá ver en El Cultural San Martín.`,
];

var columnas = document.getElementsByClassName("columna"); // array que tiene las columnas existentes


function agregarTexto(columnas, texto){
    for (var i in columnas) {
        columnas[i].innerHTML = texto[i];
    }
}

agregarTexto(columnas, texto);

function next(){
    agregarTexto(columnas, texto2);
}

