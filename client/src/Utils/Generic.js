export const inputChange = (e, setInput) => {
	setInput((prevState) => {
		return {
			...prevState,
			[e.target.name]: e.target.value,
		};
	});
};
