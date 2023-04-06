function relogio(){
    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date ();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    // const formatoHora = horas.toString().padStart(2, "0");

    const formatoHora = 14

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
    var img = document.getElementById('imagem')


    if (formatoHora >= 6 && formatoHora <= 12) {
        body.style.backgroundImage = 'url(https://st.depositphotos.com/1001590/1218/i/600/depositphotos_12180978-stock-photo-young-man-at-sunset.jpg)';

        img.src = 'https://i1.sndcdn.com/artworks-hEvN8Uhe3ex5QZGO-up5xeg-t500x500.jpg'
    }

    else if (formatoHora > 12 && formatoHora < 19) {
        body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/03/30/13/01/sun-3275314_960_720.jpg)';

        img.src = 'https://gartic.com.br/imgs/mural/ch/charlie_lawliet/escanor.png'
    }

    else {
        body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/01/29/19/00/park-3116883_960_720.jpg)';

        body.style.color = 'white'

        img.src = 'http://pm1.narvii.com/6870/2ea21f212fe5a6ae6e559554d09c5c93b5aa5942r1-340-385v2_uhq.jpg'
    }

}


setInterval(relogio, 1000)