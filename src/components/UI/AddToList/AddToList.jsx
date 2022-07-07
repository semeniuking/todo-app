import React from 'react';
import './AddToList.scss'
import {IconButton} from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

const AddToList = (props) => {
	return (
		<div className="AddToList" {...props}>
			<IconButton
				sx={{color: "#3D82EBFF", fontSize: '3rem'}}
			>
				<AddCircleSharpIcon
					sx={{color: "#3D82EBFF", fontSize: 'inherit'}}
				/>
			</IconButton>
		</div>
	);
};

export default AddToList;