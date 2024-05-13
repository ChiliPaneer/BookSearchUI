import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Doc, Result } from './types';
import ResultsView from './Results';

export default function Search() {
  const [results, setResults] = useState<Result | null>(null);
  const [sortByYear, setSortByYear] = useState<boolean>(false);
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const style = {
    marginLeft: '40px', 
    marignTop: '60px',
  }

  const submitQuery = async () => {
      try {
          const response = await fetch(`https://openlibrary.org/search.json?q=${query.replace(/ /g, '+')}`)

          if (!response.ok) {
            throw new Error('Search could not be made, try again later');
          }

          const data : Result = await response.json();
          setResults(data);
        } catch (err) {

          console.log("Search could not be made");
        }
      };

  useEffect(() => {
    if(timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      if (query) {
        submitQuery();
      }
    }, 400);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
    }, [query]);

  const toggleSort = () => setSortByYear(!sortByYear);


  return (
    <>
    <Form style={style}>
      <Form.Label htmlFor="bookSearch">Book Search</Form.Label>
      <Form.Control
        type="text"
        id="book_query"
        onChange={handleChange}
        aria-describedby="bookSearchBar"
      />
      <Form.Text id="bookSearchQuery" muted>
      Type your book query above
      </Form.Text>
      </Form>

      <Form style={style}>
      <Form.Check
      type="switch"
      id="sorting-toggle"
      label="Sort By Year"
      checked={sortByYear}
      onChange={toggleSort}
      />
      </Form>

     <p style={style}>{(results != null)? results.numFound + " results": "Results:" }</p>
      {results ? <ResultsView results={results} sortByYear={sortByYear}/> : "No Results"}
    </>
  )
}

