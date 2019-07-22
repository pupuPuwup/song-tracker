import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//     email: 'pandu@mail.com',
//     password: '1234'
// })