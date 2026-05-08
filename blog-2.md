Pick and Omit are TypeScript utility types that help you create smaller, focused versions of a large interface without rewriting code. This prevents duplication and keeps your code DRY (Don’t Repeat Yourself).
Pick allows you to select only the required properties from a master interface. For example, if an interface has 10 fields but you need only 3,
 you can “pick” those 3 instead of creating a new interface manually.
omit does the opposite. It creates a new type by removing specific properties you don’t need.
By using these, you reuse the original interface instead of copying and modifying it, which reduces errors,
 improves maintainability, and keeps your code clean and consistent.