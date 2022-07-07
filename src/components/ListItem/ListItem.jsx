import React from 'react';
import './ListItem.scss';
import {Checkbox, IconButton} from "@mui/material";
import {HighlightOff} from "@mui/icons-material";

const ListItem = (props) => {
	return (
		<div className="ListItem">
			<Checkbox/>
			<span className="ListItem__title">{props.todo.title}</span>
			<IconButton className="ListItem__remove">
				<HighlightOff/>
			</IconButton>
		</div>
	);
};

export default ListItem;