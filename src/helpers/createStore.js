
// Create Redux store on our server

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";


export default () => {
	// {} -> empty intial state value	
	
	const store = createStore(reducers, {}, applyMiddleware(thunk));
	return store;
}