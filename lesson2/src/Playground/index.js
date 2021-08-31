import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  noUnderline: {
    "&>div": {
      "&::before": {
        border: "none !important",
      },
      "&::after": {
        border: "none !important",
      },
    },
  },
}));

const Playground = (props) => {
  const classes = useStyles();
  const { messagesArray } = useSelector((state) => state.chat);

  return (
    <div>Playground</div>
  );
};


export default Playground;
