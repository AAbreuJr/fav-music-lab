import tokenService from '../services/tokenService';
const BASE_URL = '/api/songs/';

export function create(song) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(song)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
  }

export function deleteOne(id) {
return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
}, {mode: "cors"})
.then(res => res.json());
}

export function update(song) {
    return fetch(`${BASE_URL}${song._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(song)
    }, {mode: "cors"})
    .then(res => res.json());
}