export class UsersService {
    getUsers = () => {
        return fetch('http://localhost:4000/users')
            .then((res) => res.json());
    }

    addUser = (user) => {
        return fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => res.json());
    }

    getById = (id) => {
        return fetch(`http://localhost:4000/users/${id}`)
            .then((res) => res.json());
    }
}