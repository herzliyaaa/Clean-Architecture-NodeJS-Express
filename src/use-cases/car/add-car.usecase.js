const addCar = ({ carDB, carEntity }) => {
  return async function postCar(info) {
    const result = carEntity(info);
    const carExists = await carDB.findBySerial(result.serial_number);

    if (carExists.rowCount !== 0) {
      const result = {
        msg: "Serial Number already exists",
        car: carExists.rows
      };
      return result;
    }

    const data = await carDB.addCar({
      sku_id: result.sku_id,
      serial_number: result.serial_number,
      brand_name: result.brand_name,
      model: result.model,
      color: result.color,
    });

    return {
      msg: "Car Added Successfully",
      data: data.rows
    };
  };
};
module.exports = addCar;
