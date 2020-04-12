import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';

function BookList({books, dispatch}) {
    //원래는 prpos.book 이렇게 들어가는 것..
    //BookList({props}) 
    //근데 지금은 하나밖에 없으니까 이렇게 받는다.
    return (
    <List component="nav" aria-label="main mailbox folders">
    {books.map(item => (
        <div key={item.title}>
        <ListItem button onClick={()=>{
            console.log("Clicked",item);
            console.log(dispatch);
            dispatch({type: 'BOOK_SELECT', payload: item});
            // alert(item.title);
            // dispatch시켜서 액션을 내보내면 그 액션이 리듀서를 타고 돌아서 스테이트를 바꾸고
            // 그 바꾼 스테이트에 영향을 받는 애들만 새로 그려지는 것이다. (리랜더)
        }}>
            <ListItemText
            primary={item.title}
            secondary={item.subtitle}
            />
        <Badge badgeContent={item.likes} color="secondary">
            <FavoriteIcon style={{color: 'pink'}}/>
        </Badge>
        </ListItem>
        <Divider/>
        </div>
    ))}
        
    </List>
    )
}

//바깥에서 들어오는 스테이트 들 중 어떤 것만 이 안에 넣어줄 지.. 
// 전체 앱이 가지는 스테이트는 훨씬 더 복잡할 수 있는데 내가 쓰는 컴포넌트는
// 그 중에 일부분만 건들일 수도 있기 때문에... books만 읽어오겠다는 뜻
const mapStateToProps = (state /*, ownProps*/) => {
    return {
      books: state.books
    }
}

export default connect(
    mapStateToProps
)(BookList)

  //우리가 만든 BookList라는 컴포넌트 밖에서 커네팅을 시킨 컴포넌트를 만든 것
  //커네팅을 시킨 컴포넌트는 글로벌에 있는 리덕스 스토어에 있는 스테이트 중에 books만 잡아서
  //this.props.에 books에다 넣어주는 것이다. 