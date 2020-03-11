import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

function Signup(props) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit() {
		props.signup({ username, email, password }).then(() => props.history.push("/"));
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
				type="text"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="email"
				required	
			/>
			<input 
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="password"
				required
			/>
			<button type="submit">SIGN UP</button>
		</form>
	)
}

const mapDispatch = dispatch => ({
 	signup: user => dispatch(signup(user))
});

export default connect(undefined, mapDispatch)(Signup)