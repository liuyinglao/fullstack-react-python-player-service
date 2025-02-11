export default async function fetchData() {
    return fetch('/v1/players')
        .then(response => response.json())
        .then(data => {
            return data;
        }).catch(error => {
            console.log('oops there was an error', error)
    })
};

export async function fetchSearchData(playerId) {
    return fetch(`v1/players/${playerId}`).then(response => response.json())
        .then(data => {
            console.log('fetchSearchData success', {data})
            return data;
        }).catch(error => {
            console.log('oops there was an error', error)
    })
}
