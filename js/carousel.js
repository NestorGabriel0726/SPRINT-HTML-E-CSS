

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static _items = [];
    static _sequence = 0;
    static _size = 0;
    static _interval = null;
    
      
    static Start(arr){
        if(arr && Array.isArray(arr) && arr.length > 0) {

            Carousel._items = arr;
            Carousel._size = arr.length;
            Carousel._sequence = 0;

            Carousel.Next();

            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            
            
        } else {
            console.error("Method Start need a Array Variable.");
        }
    }

    static Next(){
        const drawArea = document.getElementById("carousel");
        const titleArea = document.getElementById("carousel-title")
        
        if (drawArea && titleArea) {
            const currentItem = Carousel._items[Carousel._sequence];

            drawArea.innerHTML = ` <a href= "${currentItem.link}">
                                    <img src= "${currentItem.image}" >
                                    </a>`;

            titleArea.innerHTML = `<h2> ${currentItem.title} </h2>`;

            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        }
    }
};
