import './App.css';

const MessagesListComponent = (props) => {
    return (
        <div className="messageList">
        {props.array.map((message, i) => (
            <div key={i}>{message.messageText}</div>
        ))}
      </div>
    )
}

export default MessagesListComponent;