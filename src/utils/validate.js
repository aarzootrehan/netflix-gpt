export const isValid = (email, password)  => {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    if(!emailRegex.test(email)) {
        return "Email ID is not valid!!"
    }

    if(!passwordRegex.test(password)) {
        return "Password is not valid!!"
    }
    return null;
}