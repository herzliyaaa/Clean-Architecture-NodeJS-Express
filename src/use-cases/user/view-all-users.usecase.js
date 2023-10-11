const viewAllUsers = ({ userDB }) => {
  return async function viewUsers() {
    const result = await userDB.getAllUsers();

    let password = "defaultPassword";

    for (let i of result.rows) {
      i.password = password
    }

    return result.rows;
  };
};

module.exports = viewAllUsers;
