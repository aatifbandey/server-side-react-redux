import React from "react";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "../client/Routes";

import serialize from "serialize-javascript";
// serialize is a function that take a string and escapes character and replace with uncode string

import { renderRoutes } from "react-router-config";

export default (req, store) => {
	// req.path - check express documentation
	// context is a mandatory prop to be passed with staticRouter 

	// const content = renderToString(
	// 	<Provider store={store}>
	// 		<StaticRouter context={{}} location={req.path} >
	// 			<Routes />
	// 		</StaticRouter>
	// 	</Provider>
	// );

	// when we use react-router-config
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter context={{}} location={req.path} >
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);

	// window.INITIAL_STATE = ${JSON.stringify(store.getState()) } - Its a security flaw 
	//serialize can help
	return `
		<html>
			<head>
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
				window.INITIAL_STATE = ${serialize(store.getState()) }
				</script>
				<script src="bundle.js" ></script>
			</body>
		</html>
	`;
};
