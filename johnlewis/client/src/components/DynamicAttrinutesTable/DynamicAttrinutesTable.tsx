import * as React from 'react'

interface OwnProps {
  attrKey: string;
  attrValue: string;
}

const DynamicAttrinutesTable: React.FC<OwnProps> = ( {attrKey, attrValue} ) => {

  return (
    <tr>
        <td>{attrKey}</td>
        <td>{attrValue}</td>
    </tr>
  )
}

export default DynamicAttrinutesTable;
