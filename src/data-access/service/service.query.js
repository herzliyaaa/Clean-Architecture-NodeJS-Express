const serviceData = ({ dbs }) => {
    return Object.freeze({
      getAllServices,
      getServiceById,
      addService,
      editService,
      softDeleteService,
    });
  
    async function getAllServices() {
      const connect = await dbs();
      const sql =
        "SELECT * FROM services WHERE NOT is_active IN (false) ORDER BY service_id DESC";
      return connect.query(sql);
    }
  
    async function getServiceById(id) {
      const connect = await dbs();
      const sql = "SELECT * FROM services WHERE service_id = $1";
      const params = [id];
      return connect.query(sql, params);
    }
  
    async function addService(service) {
      const connect = await dbs();
      const { service_name, hourly_rate } = service;
      const params = [service_name, hourly_rate];
      console.log(params);
      const sql =
        "INSERT INTO services ( service_name, hourly_rate, is_active, created_at, updated_at) VALUES ( $1, $2, true, localtimestamp, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    }
  
    async function editService(service) {
      const connect = await dbs();
      const { service_name, hourly_rate, id } = service;
      const sql =
        "UPDATE services SET service_name = $1, hourly_rate = $2, updated_at = localtimestamp WHERE service_id = $3 RETURNING *";
      const params = [service_name, hourly_rate, id];
      return connect.query(sql, params);
    }
  
    async function softDeleteService(id) {
      const connect = await dbs();
      const sql =
        "UPDATE services SET is_active = false WHERE service_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    }
  };
  
  module.exports = serviceData;
  