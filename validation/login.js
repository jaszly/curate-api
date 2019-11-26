const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = (req, res) => {
	validateLoginInput(data) => {
		let errors = {}
		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";

		//check email and pwd
		if (Validator.isEmpty(data.email)){
			errors.email = 'Email field is required'
		} else if (!Validator.isEmpty(data.email)) {
			errors.email = "Email is invalid"
		}
		if (Validator.isEmpty(data.password)) {
			errors.password = "Passowrd field is required"
		}

		return {
			errors,
			isValid: isEmpty(errors)}
	}
}
