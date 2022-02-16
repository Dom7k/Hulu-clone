import Image from 'next/image'
import React from 'react'

const Thumbnail = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <Image 
        layout='responsive'
        src={
          `{BASE_URL}${result.backdrop_path || result.poster_pat}` || 
          `{BASE_URL}${result.poster_pat}`}
        height={1080}
        width={1920}
        alt=''
      />
    </div>
  )
}

export default Thumbnail