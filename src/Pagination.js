import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button id='button' onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button id='button' onClick={gotoNextPage}>Next</button>} 
    </div>
  )
}
