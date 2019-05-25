import React, {Component} from "react";

import { connect } from "react-redux";

import { fetchUsers } from "../actions";

class UsersList extends Component {

	componentDidMount() {
		// why this api call when we already fetching data from express 
		// since user might land home and navigate to list page which can be an SPA 
		//so you wont have user data  data 
		this.props.fetchUsers();
	}
	renderUsers () {
		const { users } = this.props;
		return users.map((d)=>{
			return (<li key={d.id}>{d.name}</li>)
		})
	}
	render () {
		return (
			<div>
				Here is a list of users
				<ul>{this.renderUsers()}</ul>
			</div>
		)
	}
}

function mapStateToProps ( state ) {
	return {
		users: state.users
	}

}

function loadData (store) {
	
	// store created in express
	console.log("I am trying to load some data");
	// Make an API request from express and return the data
	return store.dispatch(fetchUsers())
}

export default { 
	loadData,
	component: connect(mapStateToProps,{
		fetchUsers
	})(UsersList)
};