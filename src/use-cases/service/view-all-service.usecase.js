const viewAllService = ({ serviceDB }) => {
  return async function viewServices() {
    const result = await serviceDB.getAllServices();
    return result.rows;
  };
};

module.exports = viewAllService;
