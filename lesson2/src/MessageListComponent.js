import './App.css';

const MessagesListComponent = (props) => {
    return (
        <div className="messageList">
        {props.array.map((message, i) => (
            <div key={i}>{message}</div>
        ))}
      </div>
    )
}

export default MessagesListComponent;