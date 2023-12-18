export const greeting = (name) => {
    if (name){ //make sure this isn't a falsy value, like undefined or an empty string
        console.log(`Hello, ${name}! How's it going?`)
    }
}