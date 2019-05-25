import React from "react";


const Home = () => {
	return(
		<div>
			<div> I am at Home component</div>
			<button onClick={()=>{console.log("Pressed")}}>Press me</button>
		</div>
	)
};

export default {
	component: Home
};