import Car from "../car.js";
import Employee from '../employee.js';
// const DefaultController=()=> {

//   const newcar = new Car('red','suv')
//   newcar.setmodel('xuv500')

//   const finalModel = newcar.getmodel('xuv500')
  
// }


class DefaultController {
  first = (req, res) => {
    let honda = new Car("white", "petrol");
    let hundai = new Car("black", "diesel");
    console.log('hnd', honda + "\n" + hundai);

    res.status(200).send({
      "data" : "Honda-colour: " + honda.getcolour + ', ' + "Hundai-colour: " + hundai.getcolour + ', ' + 'Honda-type: ' + honda.gettype + ', ' + hundai.gettype
    })
  }
}

export default DefaultController;