import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

class NavBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { classes } = this.props;
		console.log(classes.root);
		return (
			<div className={classes.root}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' className={classes.grow}>
							Vewr
						</Typography>
						<Button color='inherit'>Login</Button>
						<Button color='inherit'>SignUp</Button>
						<Button color='inherit'>Upload</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
NavBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
