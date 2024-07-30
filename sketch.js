function setup() {
    createCanvas(600, 400);
  }
  function inicializaCores(){
   background("pink");
    fill("red");
    textSize(64);
    textAlign(CENTER,CENTER);
    
    
  }
  
  function draw(){
  inicializaCores();
    let maximo = width;
    let minimo = 0
    let palavra = "Caminhando pela rua";
    let quantidade = map(mouseX,0,width,0,palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,300,200);
    
  }