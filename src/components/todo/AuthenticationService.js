/** For React Components, we export the class directly
 * For Helper services, we export an instance of the class - an object
 */
class AuthenticationService {
    // register the fact that a user has really logged in
    registerSuccessfulLogin(username, password) {
        // put a value in the storage
        console.log("!");
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) {
            return false
        } else {
            return true
        }
    }
}

export default new AuthenticationService();