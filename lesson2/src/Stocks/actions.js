import { setData, setError, setLoading } from "./stocksSlice";

export default async function moexTickerLast(ticker) {
  const json = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json?iss.meta=off')
      .then((res) => { return res.json()});
  return json.marketdata.data.filter(function(d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];
}

const tickers = ["GAZP", "SBER", "AFLT"];

export const getStocksQuotes = () => async (dispatch, getState) => {
  const {
    stocks: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      let currentQuotes = [];
      for (let i = 0; i < tickers.length; i++)
      {
        currentQuotes.push(await moexTickerLast(tickers[i]));
      }
      dispatch(setData(currentQuotes));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};