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



export interface Result {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Doc[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export interface Doc {
    author_key:              string[];
    author_name:             string[];
    cover_i:                 number;
    ebook_access:            string;
    ebook_count_i:           number;
    edition_count:           number;
    edition_key:             string[];
    first_publish_year:      number;
    first_sentence:          string[];
    format:                  string[];
    has_fulltext:            boolean;
    ia:                      string[];
    ia_collection:           string[];
    ia_collection_s:         string;
    isbn:                    string[];
    key:                     string;
    language:                string[];
    last_modified_i:         number;
    number_of_pages_median:  number;
    printdisabled_s:         string;
    public_scan_b:           boolean;
    publish_date:            string[];
    publish_place:           string[];
    publish_year:            number[];
    publisher:               string[];
    seed:                    string[];
    title:                   string;
    title_suggest:           string;
    title_sort:              string;
    type:                    string;
    subject:                 string[];
    place:                   string[];
    person:                  string[];
    readinglog_count:        number;
    want_to_read_count:      number;
    currently_reading_count: number;
    already_read_count:      number;
    publisher_facet:         string[];
    person_key:              string[];
    place_key:               string[];
    person_facet:            string[];
    subject_facet:           string[];
    _version_:               number;
    place_facet:             string[];
    author_facet:            string[];
    subject_key:             string[];
}

