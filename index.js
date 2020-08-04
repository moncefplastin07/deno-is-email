export default function validateEmail(email) {
    // email RegEx pattern
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // return validation
    return emailPattern.test(email)
}