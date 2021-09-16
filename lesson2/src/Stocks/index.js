import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {getStocksQuotes} from './actions'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },

  imageWrapper: {
    minWidth: "450px",
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  catImg: {
    width: "100%",
    height: "100%",
  },
}));


const Stocks = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.stocks);

  console.log(data, loading, error);

  const getThunkStocksQuotes = useCallback(
    () => dispatch(getStocksQuotes()),
    [dispatch]
  );

  useEffect(() => {
    getThunkStocksQuotes();
  }, [getThunkStocksQuotes]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка</div>}

        {!loading && !error && data && (
          <div>
            <div>Газпром: {data[0]}</div>
            <div>Сбербанк: {data[1]}</div>
            <div>Аэрофлот: {data[2]}</div>
          </div>
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkStocksQuotes()}
      >
        Обновить котировки
      </Button>
    </div>
  );
};

export default Stocks;