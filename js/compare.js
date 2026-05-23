
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}


// Verificar se dois carros foram checados, adiciona e remove carros do array
function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            // Impede o usuário de selecionar mais de dois veículos
            if(carArr.length >= 2){
                alert("Só é permitido selecionar dois veículos para comparação!");
                el.checked = false; // Desmarca a checkbox
                return;
            }
            // Adicionando objeto do carro dentro do array
            carArr.push(carClass) 
        } else {
            // Removendo veículo desmarcado pelo usuário 

            let posicao = GetCarArrPosition(carArr, carClass);
            if(posicao !== -1){
                carArr.splice(posicao, 1); // Aqui é removido o carro 
            }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {

    // Criei um loop para que os elementos fossem injetados automaticamente no innerHTML de acordo com a posição do array
    for(let i = 0; i < 2; i++) {
        let carro = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="src/${carro.image}" alt="${carro.nome}" style="width: 150px; height: auto;">`
        

        document.getElementById(`compare_modelo_${i}`).innerText = carro.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = carro.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = carro.alturaCacamba;
        document.getElementById(`compare_alturasolo_${i}`).innerText = carro.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = carro.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = carro.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = carro.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = carro.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = carro.roda;
        document.getElementById(`compare_preco_${i}`).innerText = carro.preco;


        // Para formatar o texto do preço
        document.getElementById(`compare_preco_${i}`).innerText = carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
}
