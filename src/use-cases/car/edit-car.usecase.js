const editCar = ({ carDB, carEntity }) => {
    return async function putCar({id, ...carInfo}) {
      const result = carEntity(carInfo);
      // const carExists = await carDB.findBySerial(result.serial_number, id);
  
    
      //TODO: change rowCount into something that does not count all the data (Breakdown and Compare only the Serial Number of the existing car )

      // if (carExists.rowCount !== 0) {
      //   const result = {
      //     msg: "Serial Number already exists"
      //   };
      //   return result;
      // }

      // if (carExists.rows[0].serial_number === result.serial_number) {
      //  return ({msg: "Serial Number already exists"});
      // }
  
      return carDB.editCar({
        id: id,
        serial_number: result.serial_number,
        brand: result.brand,
        model: result.model,
        color: result.color,
        year: result.year,
        car_for_sale: result.car_for_sale,
      });
    };
  };
  module.exports = editCar;
  
