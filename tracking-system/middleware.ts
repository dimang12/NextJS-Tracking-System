export { default } from "next-auth/middleware"


export const config = {
    // *: zero or more parameters
    // +: one or more parameters
    // ?: zero or one parameters
    // (x|y|z): x or y or z
    marcher: [
        '/users', // match /users/1, /users/1/edit, /users/1/addresses
    ]
}