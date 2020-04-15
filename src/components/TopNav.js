import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { addNewBook } from '../actions';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function TopNav({addNewBook}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              BookList
            </Typography>
            <Button color="inherit" onClick={() => addNewBook()}>Add</Button>
            {/* 여기서 그냥 호출하면 자동으로 디스패치 됨 */}
          </Toolbar>
        </AppBar>
      </div>
    )
}



export default connect(null, { addNewBook})(TopNav)
//이 안에 있는 오브젝트를 갖고 디스패치를 붙여서 바인드액션크레이터를 붙여서 끝내준다.
//심플한 방법...세가지 방법이 있음!
