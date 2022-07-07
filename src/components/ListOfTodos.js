import React from 'react';
import ListItem from "./ListItem/ListItem";
import '../assets/scss/ListOfTodos.scss'

const ListOfTodos = ({todos}) => {
	return (
		<div className='ListOfTodos'>
			{todos.map(todo =>
				<ListItem todo={todo} key={todo.id}/>
			)}
		</div>
	);
};

export default ListOfTodos;