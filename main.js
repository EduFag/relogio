function relogio(){
    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date ();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    // const formatoHora = horas.toString().padStart(2, "0");

    const formatoHora = 09

    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}: ${formatoMinutos}: ${formatoSegundos}`;

    
    const frase = document.querySelector('.frase')
//array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.
    dia = new Array ('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    const body = document.querySelector('body')

    if (formatoHora <= 12) {
        body.style.backgroundColor = 'red';
    }

    if (formatoHora > 12 & formatoHora < 19) {
        body.style.backgroundColor = 'blue';
    }

    if (formatoHora >= 19) {
        body.style.backgroundColor = 'gray';
    }

}


setInterval(relogio, 1000)