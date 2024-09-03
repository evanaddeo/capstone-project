export function verifyLoginCredentials(username, password) {

    if (username === "") {
        return {errorField: "username", errorMsg: "Username cannot be empty"}
    } else if (password === "") {
        return {errorField: "password", errorMsg: "Password cannot be empty"}
    }

    return {errorField: null, errorMsg: null}
}

export function verifySignupCredentials(username, password, confirmPassword) {

    if (username === "") {
        return {errorField: "username", errorMsg: "Username cannot be empty"}
    } else if (password === "") {
        return {errorField: "password", errorMsg: "Password cannot be empty"}
    } else if (confirmPassword === "") {
        return {errorField: "confirmPassword", errorMsg: "Confirm password cannot be empty"}
    }

    return {errorField: null, errorMsg: null}
}