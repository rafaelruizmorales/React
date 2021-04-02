import * as React from 'react'

type ownProps = {
    title: string
}

export default function PageHeader({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
