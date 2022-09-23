const softDelService = ({ serviceDB }) => {
  return async function deleteService(info) {
    const { id } = info;

    const result = await serviceDB.softDeleteService(id);
    return result.rows;
  };
};

module.exports = softDelService;
