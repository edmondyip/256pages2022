"use client";

import { useEffect } from "react";

interface IProps {
	error: Error;
	reset: () => void;
}

export default ({ error, reset }: IProps) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h1>Error</h1>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
};
