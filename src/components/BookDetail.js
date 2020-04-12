import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 296,
    width: 200,
    border: '1px solid gray'
    // paddingTop: '56.25%', // 16:9
  },
}));

function BookDetail({book, dispatch}) {
  const classes = useStyles();
  if (!book) {
      return (
        <Alert severity="warning">No book selected.</Alert>
      )
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        title={book.title}
        subheader={book.subtitle}
      />
      {
        book.img && (
            <CardMedia
            className={classes.media}
            image={book.img}
          />
        )
      }
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick= {
            () => {
                dispatch({
                    type: 'BOOK_LIKE',
                    title: book.title
                })
            }
        }>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
    book: state.selected
    }
}

export default connect(
    mapStateToProps
)(BookDetail)