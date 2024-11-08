# 1. Understanding the Power of Union and Intersection Types in TypeScript
TypeScript's powerful type system helps developers write safer, more maintainable code. Among its standout features are **union** and **intersection types**—two concepts that add significant flexibility and precision to your code. In this post, we'll explore the significance of these types and how to use them effectively to improve your TypeScript projects.

---

## 1.1. Table of Contents
- [1. Understanding the Power of Union and Intersection Types in TypeScript](#1-understanding-the-power-of-union-and-intersection-types-in-typescript)
  - [1.1. Table of Contents](#11-table-of-contents)
  - [1.2. What are Union Types?](#12-what-are-union-types)
    - [1.2.1. Syntax](#121-syntax)
  - [1.3. Why Union Types are Important](#13-why-union-types-are-important)
  - [1.3.1 Key Benefits of Union Types:](#131-key-benefits-of-union-types)
  - [Example](#example)

---

## 1.2. What are Union Types?

A **union type** allows a variable to hold one of several specified types. Union types give us the flexibility to say, "this value could be of type A or type B," making it perfect for cases where multiple types are valid for a single value.

### 1.2.1. Syntax
To create a union type, use the pipe symbol (`|`) between the types:

```typescript
let value: string | number;
value = "Hello";  // Valid
value = 42;       // Also valid
```

In this case, userId can either be a string or a number. This is useful when you have multiple functions with different parameter types but similar functionality.

## 1.3. Why Union Types are Important
Union types are critical for improving type safety in scenarios where a variable can have multiple types. They enable TypeScript to detect errors when an invalid type is assigned, while also giving you the flexibility to work with multiple types in a single variable.
 
## 1.3.1 Key Benefits of Union Types:
- **Flexibility**: Allows a variable to accept multiple types, which is especially useful when working with APIs or  data from different sources.
- **Enhanced Type Checking**: TypeScript will still validate each possible type, alerting you to invalid type usage.
- **Improved Readability**: Union types make it clear that a value is expected to be one of a specific set of types.
  
## Example

the following variable is of type number or string:
```typescript
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

Back to the `add()` function example, you can change the types of parameters from the any to a union like this: