import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { changeNick } from "./profileSlice";
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    nick: {
        padding: "25px",
    }
  }));

function Profile() {
    
    const classes = useStyles();
    const [input, setInput] = useState("");

    const { nick, sex } = useSelector((state) => state.profile)
    const dispatch = useDispatch();
    const OnEnterKey = () => {
        dispatch(changeNick( input ));
    }

    return <div>
        <div className={classes.nick}>
            Nick name : {nick}
        </div>
        <TextField 
            id="outlined-basic" 
            label="New Nickname" variant="outlined" 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(key) =>{
            if (key.code === "Enter") {
                OnEnterKey();
            }
            }}/>
    </div>
}

export default Profile;

