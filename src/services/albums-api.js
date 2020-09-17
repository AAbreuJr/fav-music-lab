import tokenService from '../services/tokenService';
const BASE_URL = '/api/albums/';

export function create(album) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(album)
    }, {mode: "cors"})
    .then(res => res.json());
  }