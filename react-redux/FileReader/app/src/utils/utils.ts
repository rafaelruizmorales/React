type webInfo = {
    url: string,
    ip: number,
}

export const sortResults = (obj: webInfo | {}) => {
    return Object.entries(obj).sort(
        (a: [string, string | number], b:[string, string | number]) => (Number(b[1]) - Number(a[1]))
    )
}