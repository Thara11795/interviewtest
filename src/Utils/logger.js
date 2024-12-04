const isDevelopment = process.env.NODE_ENV === "development";

class Logger {
	log(message) {
		if (isDevelopment) {
			console.log(message);  // Can be expanded with more complex formatting or logging mechanisms
		}
	}

	info(message) {
		if (isDevelopment) {
			console.info(message);
		}
	}

	warn(message) {
		if (isDevelopment) {
			console.warn(message);
		}
	}

	error(message) {
		console.error(message);
	}
}

const logger = new Logger();

export default logger;
