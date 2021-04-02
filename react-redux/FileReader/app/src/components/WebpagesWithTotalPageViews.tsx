import * as React from 'react'

import Table from '../components/Table'

import { sortResults } from '../utils/utils'

type line = {
    URL: string,
    IP: string,
}

type ownProps = {
    lines: line[]
}

export default function WebpagesWithTotalPageViews({ lines }: ownProps) {

    const webpagesWithTotalPageViews = lines.reduce((result, current) => {
        const url = current.URL

        result[url] = (result[url] || 0) + 1;

        return result;
    }, {});

    const webpagesWithTotalPageViewsSortedAsc = sortResults(webpagesWithTotalPageViews)

    return (
        <div>
            <Table
                title="A list of webpages with total page views ordered from most to least page views."
                data={webpagesWithTotalPageViewsSortedAsc}
            />
        </div>
    )
}
