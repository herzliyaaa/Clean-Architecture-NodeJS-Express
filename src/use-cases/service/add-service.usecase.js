const addService = ({ serviceDB, serviceEntity }) => {
  return async function postService(info) {
    const result = serviceEntity(info);

    return serviceDB.addService({
      service_name: result.service_name,
      hourly_rate: result.hourly_rate
    });
  };
};
module.exports = addService;
