import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Search() {
  return (
    <>
      <Form.Label htmlFor="bookSearch">Book Search</Form.Label>
      <Form.Control
        type="text"
        id="book_query"
        aria-describedby="bookSearchBar"
      />
      <Form.Text id="bookSearchQuery" muted>
      Type your book query above
      </Form.Text>
    </>
  )
}
