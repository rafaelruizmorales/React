import { 
    FETCH_FILE_CONTENT_REQUEST,
    FETCH_FILE_CONTENT_SUCCESS,
    FETCH_FILE_CONTENT_FAILURE,
} from './fileInputActionTypes'

export const fetchFileContentRequest = () => {
    return {
        type: FETCH_FILE_CONTENT_REQUEST
    }
}

export const fetchFileContentSuccess = (fileContent: string | ArrayBuffer | null | undefined) => {
    return {
        type: FETCH_FILE_CONTENT_SUCCESS,
        payload: fileContent
    }
}

export const fetchFileContentFailure = (error: string) => {
    return {
        type: FETCH_FILE_CONTENT_FAILURE,
        payload: error
    }
}

export const fetchFileContent = (e: any) => {
    return (dispatch) => {
        dispatch(fetchFileContentRequest)

        const reader = new FileReader()
        const file = e.target.files[0]

        reader.readAsText(file)

        reader.onload = async (e: ProgressEvent<FileReader>) => {
            const fileContent = e.target?.result
            await dispatch(fetchFileContentSuccess(fileContent))
        }

        reader.onerror = async (e:ProgressEvent<FileReader>) => {
            await dispatch(fetchFileContentFailure(`Error reading file: ${reader.error}`))
            reader.abort();
        }

    }
}