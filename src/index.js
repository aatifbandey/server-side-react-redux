//if BABEL LOADER is not available
//const express = require("express");
//const React = require("React");
//const renderToString = require("react-dom/server").renderToString; // 
//const Home = require("./client/components/Home").default;
import 'babel-polyfill';
// execute the module which is run through polyfill make use of async
//import proxy from "express-http-proxy";

import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// Set up proxy 
// Any request trying to access /api is redirected to this below url
// app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
// 	proxyReqOptDecorator(opts) {
// 		opts.header['x-forward-host'] = "localhost:8000"
// 		return opts;
// 	}
// }));


app.use(express.static('public'));

// pass all routes
app.get("*", (req, res)=>{

	// Created our redux store
	const store = createStore();

	// Logic to initalize and
	// load data into store
	/// matchRoutes will match the path and return array of components (or promises) that has to be rendered

	const promises = matchRoutes(Routes, req.path).map(({ route })=>{
		// Check express log you are trying to load some data
		return route.loadData ? route.loadData(store) : null;
	});

	//console.log(promises);

	Promise.all(promises).then(()=>{
		
		// When all our data loading function is done we render our html
		res.send(renderer(req, store));
	});

	//res.send(renderer(req, store));
});

app.listen(8000,()=>{
	console.log("App listening on 8000")
});