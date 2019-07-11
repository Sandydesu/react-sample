export class UsersService {
    getUsers = () =>{
        return fetch('http://localhost:4000/users')
        .then((res)=>res.json())
    }
}