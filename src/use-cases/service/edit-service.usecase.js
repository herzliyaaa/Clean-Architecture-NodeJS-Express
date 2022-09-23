const editService = ({ serviceDB, serviceEntity }) => {
  return async function putService({ id, ...serviceInfo }) {
    const result = serviceEntity(serviceInfo);

    return serviceDB.editService({
      id: id,
      service_name: result.service_name,
      hourly_rate: result.hourly_rate
    });
  };
};
module.exports = editService;
