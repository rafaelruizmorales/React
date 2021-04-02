import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchFileContent } from '../redux'

import { RootState } from '../redux/rootReducer'

import PageHeader from './PageHeader'

import WebpagesWithTotalPageViews from '../components/WebpagesWithTotalPageViews'
import WebpagesWithTotalUniquePageViews from '../components/WebpagesWithTotalUniquePageViews'

import '../styles/fileInputContainer.css'

export default function FileInputContainer() {

    const dispatch = useDispatch()


    const handleOnChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
        dispatch(fetchFileContent(e))
    }


    const fileContent: string = useSelector((store: RootState) => store.fileInput.fileContent)

    const lines = React.useMemo(() => {
        if (fileContent.length) {
            return fileContent
                .split('\n')
                .map(line => line.split(' '))
                .map(arr => {
                    return {
                        'URL': arr[0],
                        'IP': arr[1]
                    }
                })
                .filter(arr => arr.URL !== '')
        }
    }, [fileContent])

    return (
        <>
            <PageHeader title="Smart Pension - FE Engineer Test" />

            <input type='file' accept='.log' test-id='file_input' onChange={handleOnChange} />

            {lines && <WebpagesWithTotalPageViews lines={lines} />}
            {lines && <WebpagesWithTotalUniquePageViews lines={lines} />}
        </>

    );

}
