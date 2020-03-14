import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import './session.css'

function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit() {
		props.login({ username, password }).then(() => props.history.push("/"));
	}

	return (
		<form className="session-form" onSubmit={handleSubmit}>
			<input 
				type="text"
				value={username}
				onChange={e => setUsername(e.target.value)}
				placeholder="username"
				autoFocus
				required
			/>
			<input 
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="password"
				required
			/>
			<button type="submit">LOG IN</button>
		</form>
	)
}

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(undefined, mapDispatch)(Login)