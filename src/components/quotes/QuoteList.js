import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useLocation } from "react-router-dom";

const QuoteList = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get('sort') === 'asc';
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  const sortedQuotes = sortQuotes(props.quotes, isAscending);
  const history = useHistory();
  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isAscending ? 'desc' : 'asc'));
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
