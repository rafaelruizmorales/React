import * as React from 'react'

interface OwnProps {
  name: string
  age?: number
}

const Welcome: React.FC<OwnProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      {age && <p>Age: {age}</p>}
    </div>
  )
}

export default Welcome
