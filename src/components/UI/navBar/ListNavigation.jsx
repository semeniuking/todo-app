import React, {Component} from 'react';
import './ListNavigation.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {IconButton} from "@mui/material";

class ListNavigation extends Component {
	render() {
		return (
			<IconButton size="medium" className="MenuMore">
				<MoreHorizIcon/>
			</IconButton>
		);
	}
}

export default ListNavigation;