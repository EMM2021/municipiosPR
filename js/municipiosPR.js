function inicio() {
	localStorage.puntuacion_maxima = (localStorage.puntuacion_maxima  || 0);
	max =  +(localStorage.puntuacion_maxima);
	//localStorage.puntuacion_maxima = 25;
	let div1 = document.getElementsByClassName("flex-container");
	let div2 = document.getElementById("mejor_puntuacion");
	if (max !== 0) {
		let html = `<h3>Tu mejor puntuación</h3>
					<p id="punt_max">${max}</p>
					<div id="boton_reset">
					<button id="reset">RESET</button>
					</div>`
		div2.innerHTML = html;
		document.getElementById("reset").addEventListener("click", reset);
	};
	div1[1].style.display = "none";
	document.getElementById("start").addEventListener("click", play);
	musica_inicio.play();
}

function play() {
	let div1 = document.getElementsByClassName("flex-container");
	let div2 = document.getElementById("mapa");
	let div3 = document.getElementById("info");
	div1[0].style.display = "none";
	div2.style.display = "block";
	div3.style.display = "block";
	musica_inicio.pause();
	musica_juego.play();
}

function reset(){
	localStorage.puntuacion_maxima = 0;
	reiniciar();
}

function aleatorio() {
	let a = Math.floor((Math.random() * municipios.length));
	return a;
}

function pregunta() {
	let x = aleatorio();
	m = municipios[x];
	document.getElementById('pregunta').innerHTML = numeroPregunta + '. ¿Dónde está ' + m + '?';

	control = 1;

	//eliminamos el municipio del array
	municipios.splice(x, 1);

	let div1 = document.getElementById("correcto");
	div1.style.backgroundColor = "rgb(22, 139, 235)";
	div1.style.color = "rgb(120, 139, 235)";
	let div2 = document.getElementById("error");
	div2.style.backgroundColor = "rgb(22, 139, 235)";
	div2.style.color = "rgb(120, 139, 235)";

	let div3 = document.getElementById("error_municipio");
	div3.style.backgroundColor = "rgb(22, 139, 235)";
	div3.style.color = "rgb(22, 139, 235)";
}

function respuesta() {

	document.getElementById("mapa").addEventListener('click', event => {


		let r = event.target.id;
		let pausa = 0;
		if (r !== "" && r !== "start" && control === 1) {
			//acierto
			if (r === m) {
				acierto.play();
				puntos++;
				score();
				aciertos.push(m);
				let div1 = document.getElementById("correcto");
				div1.style.backgroundColor = "green";
				div1.style.color = "white";
				pausa = 500;
			} else {
				//error
				fallo.play();
				errores.push(m);

				let div2 = document.getElementById("error");
				div2.style.backgroundColor = "red";
				div2.style.color = "white";

				let div3 = document.getElementById("error_municipio");
				div3.style.backgroundColor = "rgb(22, 139, 235)";
				div3.style.color = "red";
				div3.innerHTML = "Pulsaste sobre " + r;
				pausa = 2000;
			};

			control = 0;

			numeroPregunta++;
			if (numeroPregunta > 78) {
				final();
			}
			window.setTimeout("pregunta()", pausa);

		}

	});
}

function score() {
	document.getElementById('puntos').innerHTML = 'Puntos: ' + puntos;

}

function final() {
	musica_resultado.play();
	let div1 = document.getElementsByClassName("flex-container");
	let div2 = document.getElementById("mapa");
	let div3 = document.getElementById("info");
	div1[1].style.display = "flex";
	div2.style.display = "none";
	div3.style.display = "none";


	resultado_aciertos = mostrar_aciertos();
	let p = document.getElementById("aciertos");
	p.innerHTML = resultado_aciertos;

	resultado_errores = mostrar_errores();
	let q = document.getElementById("errores");
	q.innerHTML = resultado_errores;

	let r = document.getElementById("total_puntos");
	r.innerHTML = puntos;
	if (puntos > max) {
		localStorage.puntuacion_maxima = puntos;
	};

	document.getElementById("restart").addEventListener("click", reiniciar);
}

function mostrar_aciertos() {
	let html = '';
	for (let i = 0; i < aciertos.length; i++) {
		html += aciertos[i] + ", ";
	}
	return html;
}

function mostrar_errores() {
	let html = '';
	for (let i = 0; i < errores.length; i++) {
		html += errores[i] + ", ";
	}
	return html;
}

function reiniciar() {
	location.reload();
}

//inicio
document.addEventListener('DOMContentLoaded', function () {
	inicio();
	score();
	pregunta();
	respuesta();
});