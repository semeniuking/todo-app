import './assets/scss/App.scss';
import Header from "./Header";
import AddToList from "./components/UI/AddToList/AddToList";
import {useRef, useState} from "react";
import ListOfTodos from "./components/ListOfTodos";
import {Button,} from "@mui/material";
import {Send} from "@mui/icons-material";
import InputTodo from "./components/UI/InputTodo/InputTodo";

function App() {

	const [todos, setTodos] = useState([
		// {id: 1, title: "Пробуем этот ваш рект на то как это все дело делать"},
		// {id: 2, title: "Пробуем этот ваш рект на то как это все дело делать"},
		// {id: 3, title: "Пробуем этот ваш рект на то как это все дело делать"},
		// {id: 4, title: "Пробуем этот ваш рект на то как это все дело делать"},
		// {id: 5, title: "Пробуем этот ваш рект на то как это все дело делать"}
	])

	const [title, setTitle] = useState('');
	const addToTodo = (e) => {
		e.preventDefault()
		const newTodo = {
			id: Date.now(),
			title
		}
		setTodos([...todos, newTodo])
		setTitle('')
	}

	const func = () => {
		let form = document.querySelector('form');
		form.classList.toggle('active')
	}

	return (
		<div className='App'>
			<div className="App__container container">
				<Header/>
				<form className="form active">
					<InputTodo
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder="Add new todo"
						type="text"
					/>
					<Button
						onClick={addToTodo}
						type="submit"
						variant="contained"
						endIcon={<Send/>}>
						Add
					</Button>
				</form>
				<ListOfTodos todos={todos}/>
				<AddToList onClick={func}/>
			</div>
		</div>
	);
}

export default App;
