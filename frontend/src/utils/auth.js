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

export function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';')

    for (let i=0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

export function clearAllCookies() {
    // Get all cookies
    const cookies = document.cookie.split(";");

    // Iterate over each cookie and delete it
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const cookieName = cookie.split("=")[0].trim();
        
        // Set the cookie's expiration date to a past date
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    }

    console.log("All cookies cleared.");
}
