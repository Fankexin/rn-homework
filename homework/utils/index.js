import queryString from 'query-string'
let rootUrl = 'https://www.fastmock.site/mock/f68d05508962a85d8d93d3a34aac29de/api';

let myFetch = {
    get(url, queryParams) {
        url = rootUrl + url
        if (queryParams) {
            url += "?" + queryString.stringify(queryParams);
        }
        console.log(url)
        return fetch(url)
            .then(res => res.json())
    },
    post(url, body) {
        return fetch(rootUrl + url, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
    }
}

export { myFetch };