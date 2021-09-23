import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "1px solid black",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },

  senderMessage: {
    alignSelf: "flex-start",
  },
  userMessage: {
    alignSelf: "flex-end",
  },

  message: {
    backgroundColor: "#A1A1A1",
    padding: "5px",
    margin: "10px 5px",
    borderRadius: "30px",
  },
}));

const MessageList = ({ messagesArray }) => {
  const classes = useStyles();
  const { myUid } = useSelector((state) => state.chat);

  return (
    <div className={`${classes.messageList} messageList`}>
      {messagesArray &&
        messagesArray.map((message, i) => (
          <div
            key={i}
            className={`
            ${
              message.authorUid === myUid
                ? classes.userMessage
                : classes.senderMessage
            } ${classes.message}`}
          >
            {message.messageText}
          </div>
        ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
