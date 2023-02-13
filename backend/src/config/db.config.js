const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		await mongoose
			.connect(process.env.DB_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				dbName: "todo",
			})
			.then((con) => {
				console.log(
					`MongoDB Database connected with HOST: ${con.connection.host}`
				);
			});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDatabase;
