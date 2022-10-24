import QuoteList from '../components/quotes/QuoteList';

let DUMMY_DATA = [
  { id: "q1", author: "Sam", text: "I am Samuuel" },
  { id: "q2", author: "Max", text: "I am Max" },
];
const AllQuotes = () => {
  return <QuoteList quotes = {DUMMY_DATA} />;
};

export default AllQuotes;
