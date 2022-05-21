import React from 'react'
import { Redirect } from 'react-router-dom'
import httpClient from './httpClient'

class LogOut extends React.Component {

	componentDidMount() {
	}
	
	render() {
		return <button onClick={() => 	localStorage.removeItem('user')}>Log Out</button>
	}
}

export default LogOut