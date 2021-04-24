import * as React from 'react'

import { useHistory } from 'react-router-dom';

import '../../styles/pageHeader.css'

interface OwnProps {
  title: string;
  backLink? : boolean
}

const PageHeader: React.FC<OwnProps> = ( {title, backLink} ) => {

  const history = useHistory();

  const redirect = () => {
    history.push('/productGrid')
  }

  const getPageHeader = (title: string, backLink: boolean | undefined) => {
    if(backLink === undefined) {
      return <h1 className="pageHeader">{title}</h1>
    }
    return (
      <h1 className="pageHeader">
        <span className="backButton">
          <button onClick={redirect}>Back</button>
        </span>
        {title}
      </h1>
    )
  } 

  return (
    <div className="pageHeader">
      {getPageHeader(title, backLink)}
    </div>
  )
}

export default PageHeader;
