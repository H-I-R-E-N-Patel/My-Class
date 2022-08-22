class Car{
  constructor(colour, type){
    this.colour = colour,
    this.type = type
  }

  // Method
  setmodel(newModel){
    this.model = newModel;
  }
  getmodel(){
    return this.model
  }

  setcolour(colour){
    this.colour = colour;
  }
  getcolour(){
    return this.colour
  }

  settype(){
    this.type = type;
  }
  gettype(){
    return this.type
  }
}
// console.log(Car.name);
// console.log(constructor.name);


export default Car;