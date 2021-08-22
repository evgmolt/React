import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    messageListComponent: {
        height: "100%",
        width: "50%",
        borderButtom: "1px solid black",
        backgroundColor: "SandyBrown",
        float: "right",
    },
  }));

const MessagesListComponent = (messagesArray) => {
    const classes = useStyles();
    return (
        <div className={classes.messageListComponent}>
        {messagesArray.array.map((message, i) => (
            <div key={i}>{message.messageText}</div>
        ))}
      </div>
    )
}

MessagesListComponent.propTypes = {
    messagesArray: PropTypes.array,
}
export default MessagesListComponent;