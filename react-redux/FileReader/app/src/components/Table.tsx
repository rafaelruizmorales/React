import * as React from 'react';

import '../styles/table.css'


type ownProps = {
    title: string,
    data: [string, string | number][]
}

export default function Table({ title, data }: ownProps) {

    const rows = data && data.map((value: [string, string | number], index: number) => {
        const url = value[0]
        const times = value[1]

        return (
            <tr key={index}>
                <td>{url}</td>
                <td>{times} visits</td>
            </tr>
        )
    })

    return (
        <div>
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Visits</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}
