import { useState } from "react";
import { useSelector } from "react-redux";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ChatPreview from "./ChatPreview";


const useStyles = makeStyles((theme) => ({ 
  link: {
    marginRight: "15px",
    color: theme.palette.background.default,
    textDecoration: "none",
  },

  activeLink: {
    color: "red",
  },

  appBar: {
    marginBottom: "15px",
  },

  root: {
    marginRight: "350px",
  },

  mainWrapper: {
    width: "350px",
    height: "100%",
    padding: "10px 10px 0px 10px",
  },

  topComponent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    "& div": {
      borderRadius: "40px",
      "& input": {
        padding: "10px 10px",
      },
    },
  },

  chatWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const routes = [
  {
    pathTitle: "Home",
    path: "/home",
  },
  { pathTitle: "Chat", path: "/chat" },
  { pathTitle: "Playground", path: "/playground" },
];

const AppBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const { chats } = useSelector((state) => state.chat);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickProfile =() => {
    history.push("/Profile");
    console.log("Click");
  }

  return (
    <Drawer
      variant="permanent"
      open
      classes={{ paper: classes.mainWrapper, root: classes.root }}
    >
      <Box className={classes.topComponent}>
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          anchorPosition={{ top: 50, left: 25 }}
          anchorReference={"anchorPosition"}
        >
          <MenuItem key={1} onClick={handleClickProfile} >Профиль</MenuItem>
          <MenuItem key={2}>Настройки</MenuItem>
        </Menu>

        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box className={classes.chatWrapper}>
        {chats.map((chat) => (
          <ChatPreview chat={chat} />
        ))}
      </Box>
    </Drawer>

    // <MaterialUiAppBar className={classes.appBar} position="static">
    //   <Toolbar>
    //     {routes.map((route) => (
    //       <Link
    //         key={route.path}
    //         to={route.path}
    //         className={`${classes.link} ${
    //           route.path === location.pathname ? classes.activeLink : ""
    //         }`}
    //       >
    //         <Typography variant="h6">{route.pathTitle}</Typography>
    //       </Link>
    //     ))}
    //   </Toolbar>
    // </MaterialUiAppBar>
  );
};

export default AppBar;
