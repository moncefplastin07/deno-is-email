# isEmail
is simple modiule for deno It helps us to verify the email if it is valid

# Usage
a valid emails
```js
import { isEmail } from "https://deno.land/x/isEmail/mod.ts";

// Pass the email you want check it as argument
console.log(isEmail('username@domain.com')) // true
console.log(isEmail('user#name@do07main.com')) // false

```

# A valid Emails
Examples

```js

console.log(isEmail('username@domain.com'))         // true       
console.log(isEmail('user.name@do-main.com'))       // true
console.log(isEmail('user-name@sub.domain.com.dz')) // true

```
# Invalid Emails
Not allowed characters: ! # $ % & ‘ * + – / = ? ^ ` . { | } ~
Any email containing one of the not allowed characters , it is not valid

Examples
```js

console.log(isEmail('user#name@domain.com'))        // false
console.log(isEmail('user.name@do~main.com'))       // false
console.log(isEmail('user$name@sub.domain.com.dz')) // false

```