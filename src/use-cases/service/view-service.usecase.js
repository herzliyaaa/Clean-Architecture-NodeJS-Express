const viewService = ({ serviceDB }) => {
  return async function viewService(info) {
    const { id } = info;

    const result = await serviceDB.getServiceById(id);
    return result.rows;
  };
};

module.exports = viewService;
