import React from 'react'
import httpClient from './httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', lastName: '', dateOfBirth: '', jmbg: '', brtel: '', adresa: '', email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.fields)
			this.setState({ fields: { name: '', lastName: '', dateOfBirth: '', jmbg: '', brtel: '', adresa: '',email: '', password: ''} })
		// 	if(user) {
		// 		this.props.onSignUpSuccess(user)
		// 		this.props.history.push('/')
		// 	}
		// })
	}
	render() {
		const { name, lastName, dateOfBirth, jmbg, brtel, adresa, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Name" name="name" value={name} />
                            <br></br>
                            <input type="text" placeholder="LastName" name="lastName" value={lastName} />
                            <br></br>
                            <input type="text" placeholder="Godina" name="dateOfBirth" value={dateOfBirth} />
                            <br></br>
                            <input type="text" placeholder="jmbg" name="jmbg" value={jmbg} />
                            <br></br>
                            <input type="text" placeholder="brTel" name="brtel" value={brtel} />
                            <br></br>
                            <input type="text" placeholder="adresa" name="adresa" value={adresa} />
                            <br></br>
							<input type="text" placeholder="Email" name="email" value={email} />
                            <br></br>
							<input type="password" placeholder="Password" name="password" value={password} />
							<button>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp