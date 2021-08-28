import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    button: {
        margin: "0px 10px",
        backgroundColor: "SaddleBrown",
        "&:hover": {
            backgroundColor: "brown",
        }
    },
    input: {
        margin: "0px 10px",
        width: "70%",
    },
    inputWrapper: {
        flex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
  }));


const InputWrapperComponent = ({onSendMessage}) => {
    const inputField = useRef(null);
    const [inputMessage, setInputMessage] = useState("");

    const SendAndRemoveInput =() => {
        const trimmedMessageText = inputMessage.trim();
        if (trimmedMessageText !== "")
        {
            onSendMessage(trimmedMessageText, "author");
            setInputMessage("");
            inputField.current.focus();
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.inputWrapper}>

        <TextField 
            value={inputMessage} 
            label="Введите сообщение"
            autoFocus={true}
            ref={inputField}
            onChange={(e) => setInputMessage(e.target.value)} 
            onKeyDown={(key) =>{
              if (key.code === "Enter") {
                SendAndRemoveInput();
              }
            }}
            classes={{
                root: classes.input 
            }}
        />
        <Button 
            variant="contained" 
            onClick={SendAndRemoveInput}
            color="primary"
            classes={{
                root: classes.button
            }}
        >
            Отправить
        </Button>
      </div>
    )
}

InputWrapperComponent.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}

export default InputWrapperComponent;