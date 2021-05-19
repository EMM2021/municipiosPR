let municipios = [
	'Adjuntas',
	'Aguada',
	'Aguadilla',
	'Aguas Buenas',
	'Aibonito',
	'Añasco',
	'Arecibo',
	'Arroyo',
	'Barceloneta',
	'Barranquitas',
	'Bayamón',
	'Cabo Rojo',
	'Caguas',
	'Camuy',
	'Canóvanas',
	'Carolina',
	'Cataño',
	'Cayey',
	'Ceiba',
	'Ciales',
	'Cidra',
	'Coamo',
	'Comerío',
	'Corozal',
	'Culebra',
	'Dorado',
	'Fajardo',
	'Florida',
	'Guánica',
	'Guayama',
	'Guayanilla',
	'Guaynabo',
	'Gurabo',
	'Hatillo',
	'Hormigueros',
	'Humacao',
	'Isabela',
	'Jayuya',
	'Juana Díaz',
	'Juncos',
	'Lajas',
	'Lares',
	'Las Marías',
	'Las Piedras',
	'Loíza',
	'Luquillo',
	'Manatí',
	'Maricao',
	'Maunabo',
	'Mayagüez',
	'Moca',
	'Morovis',
	'Naguabo',
	'Naranjito',
	'Orocovis',
	'Patillas',
	'Peñuelas',
	'Ponce',
	'Quebradillas',
	'Rincón',
	'Río Grande',
	'Sabana Grande',
	'Salinas',
	'San Germán',
	'San Juan',
	'San Lorenzo',
	'San Sebastián',
	'Santa Isabel',
	'Toa Alta',
	'Toa Baja',
	'Trujillo Alto',
	'Utuado',
	'Vega Alta',
	'Vega Baja',
	'Vieques',
	'Villalba',
	'Yabucoa',
	'Yauco',
];

let aciertos = [];
let errores = [];

let numeroPregunta = 1,
	puntos = 0,
	r, m,
	acierto = new Audio,
	fallo = new Audio;

let max;
let control = 0; //para evitar dobles pulsaciones en una misma pregunta

musica_inicio = new Audio;
musica_juego = new Audio;
musica_resultado = new Audio;

acierto.src = "snd/acierto.mp3";
fallo.src = "snd/fallo.mp3";
musica_inicio.src = "snd/inicio.mp3";
musica_juego.src = "snd/juego.mp3";
musica_resultado.src = "snd/resultado.mp3";