

module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define("User", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	});
	return User;
}