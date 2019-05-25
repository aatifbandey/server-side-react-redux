// entry point for client side code base
import  'babel-polyfill';
// execute the module which is run through polyfill make use of async

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
// Provider ties our store to react app

import { renderRoutes } from "react-router-config";


import Routes from "./Routes";
import reducers from "./reducers";

// root id is available under index.js 
//ReactDOM.render(<Home />, document.getElementById('root'));
//ReactDOM.hydrate(<Home />, document.getElementById('root'));

// window.INITIAL_STATE injected via express render
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

// ReactDOM.hydrate(
// 	<Provider store={store}>
// 		<BrowserRouter >
// 			<Routes />
// 		</BrowserRouter>
// 	</Provider>	
// 	, 
// document.getElementById('root'));


// since we used react-router-config
ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter >
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>	
	, 
document.getElementById('root'));