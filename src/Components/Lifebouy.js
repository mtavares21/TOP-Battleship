import React from "react";

export default function Lifebuoy (){
	return(
		<svg width="200" height="200">
		  <circle
			r="70"
			cx="100"
			cy="100"
			fill="none"
			stroke="#195570"
			stroke-width="55"
		  />
		  <circle
			r="70"
			cx="100"
			cy="100"
			fill="none"
			stroke="#d86307"
			stroke-width="50"
		  />
		  <circle
			r="70"
			cx="100"
			cy="100"
			fill="none"
			stroke="white"
			stroke-width="50"
			stroke-dasharray="20 90"
			stroke-dashoffset="10"
		  />
		</svg>
	)
}