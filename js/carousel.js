

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    // Criação de objeto com tres propriedades para inserir no carrosel.
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static _slides = [];
    static _indiceAtual = 0;
    static _totalDeSlides = 0;
    static _temporizador = null;
    
    // Inicia o carrosel de imagens.  
    static Start(arr){
        if(arr && Array.isArray(arr) && arr.length > 0) {

            // Configurando as variáveis da classe Carousel com os dados do array.
            Carousel._slides = arr;
            Carousel._totalDeSlides = arr.length;
            Carousel._indiceAtual = 0;

            Carousel.UpdateDOM(); // Atualiza a tela fazendo o primeiro slide aparecer.
            Carousel.ResetTimer(); // Inicia o temporizador.
            
            
        } else {
            console.error("Method Start need a Array Variable.");
        }
    }

    // Lógica para o temporizador controlar o tempo de exibição de imagens do carrosel.
    static ResetTimer() {
        clearInterval(Carousel._temporizador); // Para resetar o temporiizador caso o usuário clique em um dos botões.
        Carousel._temporizador = setInterval(function(){Carousel.Next();}, 2000);
    }

    // Lógica para passar o próximo slide.
    static Next(){
        Carousel._indiceAtual = (Carousel._indiceAtual + 1) % Carousel._totalDeSlides; // O operador % faz resetar para o indice 0 quando chega na última foto da carrosel.
        Carousel.UpdateDOM();
        Carousel.ResetTimer();
    }

    // Lógica para retornar ao slide anterior.
    static Prev(){
        Carousel._indiceAtual = (Carousel._indiceAtual - 1 + Carousel._totalDeSlides) % Carousel._totalDeSlides;
        Carousel.UpdateDOM();
        Carousel.ResetTimer();
    }

    static UpdateDOM(){
        const drawArea = document.getElementById("carousel");
        const titleArea = document.getElementById("carousel-title")
        
        if (drawArea && titleArea) {
            const currentItem = Carousel._slides[Carousel._indiceAtual];

            drawArea.innerHTML = ` <a href= "${currentItem.link}">
                                    <img src= "${currentItem.image}" >
                                    </a>`;

            titleArea.innerHTML = `<h2> ${currentItem.title} </h2>`;
        }
    }
};
