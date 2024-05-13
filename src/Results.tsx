import React, { useEffect, useState } from 'react';
import { Doc, Result } from './types';


interface BookProps {
  book: Doc;
}

interface ResultsProps {
  results: Result;
  sortByYear: boolean;
}

const bookStyle = {
    backgroundColor: '#F0F8FF',
    borderRadius: '20px',
    padding: '20px 30px 20px 30px',
    margin: '0px 40px 30px 40px',
  }

function Book(props : BookProps) {
  return (
    <div style={bookStyle}>
    <p>Title: {props.book.title}</p>
    <p>Author(s): {props.book.author_name}</p>
    <p>Publish Year: {props.book.publish_year}</p>
    <p>ISBN #: {props.book.isbn}</p>
    <p>Number of pages: {props.book.number_of_pages_median}</p>
    </div>
  )
  
}

export default function ResultsView(props : ResultsProps) {
  const sortedDocs = props.sortByYear ? 
    [...props.results.docs].sort((a, b) => b.first_publish_year - a.first_publish_year) : props.results.docs;
  return (
  props.results ? 
    <>
    {sortedDocs.map((book1, index) => <Book key={index} book={book1}/>)}
    </>
    :
    <p>No Results</p>
  )
  
}
