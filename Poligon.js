class Poligon extends BaseClass {
  constructor(x,y){
    super(x,y,200,100);
    this.image = loadImage("Plucking mangoes/Poligon.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
