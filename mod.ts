import validateEmail from "./index.js";

export function isEmail(email:string) {
    return validateEmail(email)
}
