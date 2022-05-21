import axios from 'axios';
import React, { useState } from 'react';

const NewUserNameAndPassword = () => {
	const [details, setDetails] = useState({
		nameOfWebSite: '',
		userNameOfWebSite: '',
		passwordOfWebsite: '',
	});

	const { nameOfWebSite, userNameOfWebSite, passwordOfWebsite } = details;

	const handleSubmit = async (e) => {
		// do the submit stuff
		e.preventDefault();
		setDetails({ ...details, [e.target.name]: e.target.value });

		console.table('table', details);
		try {
			await axios
				.post(`http://localhost:9999/registerNewCredentials`, { details })
				.then((res) => {
					console.log(res.data);
					console.table('table', res.data);
				});
		} catch (error) {
			console.log('error', error);
		}
	};

	const NewUserNameAndPasswordForm = () => {
		return (
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label className="form-label"> Name of the Website</label>
						<input
							type="name"
							name="nameOfWebSite"
							className="form-control"
							placeholder="Enter the name of the website"
							value={nameOfWebSite}
							onChange={handleSubmit}
						></input>
					</div>
					<div className="form-group">
						<label className="form-label"> Username of the Website</label>
						<input
							type="text"
							name="userNameOfWebSite"
							className="form-control"
							placeholder="enter username"
							value={userNameOfWebSite}
							onChange={handleSubmit}
						></input>
					</div>
					{/* "this is the page" */}
					<div className="form-group">
						<label className="form-label">Password of the website</label>
						<input
							type="text"
							name="passwordOfWebsite"
							className="form-control"
							placeholder="enter password"
							value={passwordOfWebsite}
							onChange={handleSubmit}
						></input>
					</div>
					<button type="submit">Upload</button>
				</form>
			</div>
		);
	};

	return (
		<>
			<div className="col-sm"></div>
			<div className="col-sm">
				<div className="container-fluid bg-light p-5 text-center">
					{JSON.stringify(details)}
					{NewUserNameAndPasswordForm()}
					Post a new username and password !!!
				</div>
			</div>
			<div className="col-sm"></div>
		</>
	);
};

export default NewUserNameAndPassword;
