
export const validateEmail = (email: string) =>{
    const verify = /\S+@\S+\.\S+/;
    const validate = verify.test(email);
    if (validate) return true
    return false
}
export const validatePassword = (password: string) =>{

    if (password.length >= 8 && password.length <= 16) {
        switch (true) {
            case !password.match(/[0-9]/g):return false
            case !password.match(/[a-z]/g):return false
            case !password.match(/[A-Z]/g):return false
            case !password.match(/[\W|_]/g):return false
            default:return true
        }   
    }
}
