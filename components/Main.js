import React from 'react'
import Thumbnail from './Thumbnail'

function Main({ results }) {
  
  return (
    <div className='p-5'>
      {results.map(( result ) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
    
  )
  
}

export default Main;