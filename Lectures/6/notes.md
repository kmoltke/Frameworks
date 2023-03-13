`this` is dependent on the context.
If called outside an object, it will return undefined in Node.js or some weird Window error
in browser.
Arrow functions uses the lexical scope in the context of `this` keyword.
That means where the function is defined - not where it is called! Therefore, **do not use
arrow functions to define methods in objects!**

