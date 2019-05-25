import React from "react";

import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UsersListPage, { loadData } from "./pages/UsersListPage";



// export default () => {
// 	return(
// 		<div>
// 			<Route exact path={'/'} component={Home} />
// 			<Route path={'/users'} component={UsersList} />

// 		</div>
// 	)
// }


// make use fo react-router-config to enable server side rendering 
// to detect data load or which component needs to be rendered on server
export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{	
		...UsersListPage,
		path: '/users'
	}
]
// https://react-ssr-api.herokuapp.com/