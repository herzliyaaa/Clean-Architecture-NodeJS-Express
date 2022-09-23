const makeServiceEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }


  return function createService(service) {
    const { service_name, hourly_rate } = service;

    if (!service_name) {
      throw new Error("Service name is required.");
    }
    if (!hourly_rate) {
      throw new Error("Hourly Rate is required.");
    }

    if (containsSpecialChars(service_name)) {
      throw new Error("Service Name should not contain any special character.");
    }


    return Object.freeze({
      service_name,
      hourly_rate
    });
  };
};

module.exports = makeServiceEntity;
