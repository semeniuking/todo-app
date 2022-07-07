import React from 'react';
import classes from "./InputTodo.module.scss";

const InputTodo = React.forwardRef((props, ref) => {
	return (
		<input ref={ref} className={classes.inputTodo} {...props}/>
	);
});

export default InputTodo;