var tituloetq = document.getElementById("tituloregion")
var imagenetq = document.getElementById("imagenregion")
var infoetq = document.getElementById("info")


function eventoguavio() {
    titulo = "Región Guavio"
    imagen = "assets/img/region/guavio.png"
    info = "Localizada al oriente del departamento, es de gran importancia por hallarse sus grandes reservas forestales e hídricas situadas en su mayor parte en la cuenca del Río Meta (Ríos Guavio, Sucio, Moquentivá, Chorreras, Blanco y Concepción) una mínima parte en la del Magdalena (concretamente en la cuenca Río Bogotá como el Teusacá y el Tominé), así como lagunas (algunas con potencial hidroeléctrico) como San Rafael, El Sapo, Siecha, Guatavita, Guavio y Tominé y el Parque nacional natural Chingaza (declarado patrimonio hídrico de la humanidad con el título de Humedales Ramsar)."
    eventoregion(titulo,imagen,info)
}
function sabanacentro() {
    titulo = "Región Sabana Centro"
    imagen = "assets/img/region/zipaquira.png"
    info = "Localizada al centro del departamento, es recorrida de norte a sur por el río Bogotá. En su territorio existen minas de sal en los municipios de Nemocón, Sesquilé y Zipaquirá; siendo la de Zipaquirá la más conocida, ambas minas están dedicadas al turismo. El territorio de la actual provincia fue poblado en la época prehispánica por los indígenas Muiscas. Gran parte del territorio se encuentra sobre la Sabana de Bogotá."
    eventoregion(titulo,imagen,info)
}
function ubate() {
    titulo = "Región Ubate"
    imagen = "assets/img/region/ubate.png"
    info = "Ubaté, oficialmente Villa de San Diego de Ubaté, es un municipio colombiano del departamento de Cundinamarca ubicado en la Provincia de Ubaté, de la que es capital. Se encuentra en el centro del valle de Ubaté, a 95 km al nororiente de Bogotá, a 50 km de Chiquinquirá, a 45 km de Zipaquirá, 315 km de Bucaramanga y 95 km de Muzo. Ubaté es conocido como la Capital Lechera de Colombia. Tiene una población de 45 000 habitantes para 2019."
    eventoregion(titulo,imagen,info)
}
function eventoregion(titulo,imagen,info){
    tituloetq.innerHTML=titulo
    imagenetq.src=imagen
    infoetq.innerHTML=info
}