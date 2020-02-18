import axios from 'axios';

export default class Services {
    baseUrl = 'http://localhost:8000/v1';

    static async createUserService (user) {
        const newUser = await axios.post('http://localhost:8000/v1/user', user);
        return newUser;
    }

    static async loginUserService (user) {
        console.log('+++++loginuserservic', user);
        const loggedInUser = await axios.get('http://localhost:8000/v1/user', {
    params: user
  });
        return loggedInUser;
    }
}