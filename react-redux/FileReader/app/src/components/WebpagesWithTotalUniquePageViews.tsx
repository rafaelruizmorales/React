import * as React from 'react'

import Table from './Table'

import { sortResults } from '../utils/utils'

type line = {
    URL: string,
    IP: string,
}

type ownProps = {
    lines: line[]
}

export default function WebpagesWithTotalUniquePageViews({ lines }: ownProps) {

    const counter = lines.reduce((result, current) => {
        const url = current.URL
        const ip = current.IP

        const arr = result[url] ? result[url] : [];

        result[url] = [...new Set([
            ...arr,
            ip
        ])]

        return result;
    }, {});

    const webpagesWithTotalUniquePageViews = {}
    const entries: [string, string][] = Object.entries(counter)

    for (const [key, value] of entries) {
        webpagesWithTotalUniquePageViews[key] = value.length
    }

    const webpagesWithTotalUniquePageViewsSortedAsc = sortResults(webpagesWithTotalUniquePageViews)

    return (
        <div>
            <Table
                title={'A list of webpages with total unique page views also ordered from most to least page views.'}
                data={webpagesWithTotalUniquePageViewsSortedAsc}
            />
        </div>
    )
}
