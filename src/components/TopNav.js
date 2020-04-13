import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

    //프롭스 안에 디스패치는 더이상 없다. 그 대신에 addNewBook가 들어가 있음
    //function TopNav({addNewBook}) {
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewBook}, dispatch)
  // addNewBook라는 액션 크레이터를 디스패치까지 해주는 것을 다시 addNewBook라는 
  // 이름으로 리턴해주는 것이다.
}


export default connect(null, mapDispatchToProps

)(TopNav)
