import React from 'react'

interface Props{
    txt: string;
}

const Text: React.FC<Props> = ( { txt } ) => {
  return (
    <p>{txt}</p>
  )
}

export default Text
