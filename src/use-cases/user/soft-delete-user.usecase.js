const softDelUser = ({ userDB }) => {
    return async function deleteUser(info) {
      const { id } = info;
  
      const result = await userDB.softDeleteUser(id);
      return {msg: "Deleted Successfully", data: result.rows};
    };
  };
  
  module.exports = softDelUser;
  