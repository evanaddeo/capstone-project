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

export function getCookie(name) {
    const cookies = document.cookie.split(';, ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }

    return null;
}