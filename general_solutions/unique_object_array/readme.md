# Finding a Unique Array of Objects

This guide outlines the steps to solve the problem of finding unique objects from two arrays. We aim to merge two arrays of objects and filter out duplicates, ensuring that only objects with unique key-value pairs remain.

## Objective

Given two arrays of objects, we want to find a unique array containing each object from both arrays. The uniqueness is determined by comparing the objects' key-value pairs.

### Example

**Input:**

```javascript
const old_workflow = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];
const new_workflow = [
  { a: 1, b: 2 },
  { a: 3, b: 5 },
];
```

**Expected Output:**

```javascript
const unique_workflow = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 3, b: 5 },
];
```

## Steps to Solve the Problem

### Step 1: Merge the Arrays

First, merge the two arrays (`old_workflow` and `new_workflow`) into one combined array using the spread operator (`...`).

```javascript
const merged_workflow = [...old_workflow, ...new_workflow];
```

This gives us a single array that contains all the objects from both arrays.

### Step 2: Define Object Equality

In JavaScript, objects with the same properties and values are not strictly equal unless they refer to the same memory location. To compare objects, we serialize them into a string format using `JSON.stringify()`, which ensures that objects with the same properties and values are treated as equal.

```javascript
const isObjEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);
```

### Step 3: Filter Unique Objects

We need to iterate through the merged array and add only unique objects to the result array. This can be done using a filtering technique. We use the `.some()` method to check if the object already exists in the `unique_workflow` array.

```javascript
const unique_objworkflow = [];
const unique_workflow = merged_workflow.filter(
  (workflow, index) =>
    !unique_objworkflow.some((obj) => isObjEqual(obj, workflow)) &&
    unique_objworkflow.push(workflow)
);
```

In this step:

- We iterate over each object in the `merged_workflow` array.
- We check if the object already exists in `unique_objworkflow` using the `some()` method and `isObjEqual()` function.
- If the object is unique, we add it to `unique_objworkflow`.

### Step 4: Output the Result

The final `unique_objworkflow` array will contain all the unique objects based on their `key:value` pairs.

```javascript
console.log(unique_objworkflow); // Output: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 3, b: 5 }]
```

## Code Example

```javascript
const old_workflow = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];
const new_workflow = [
  { a: 1, b: 2 },
  { a: 3, b: 5 },
];

// Step 1: Merge the two arrays
const merged_workflow = [...old_workflow, ...new_workflow];

// Step 2: Define Object Equality using JSON.stringify
const isObjEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

// Step 3: Filter out the unique objects
const unique_objworkflow = [];
const unique_workflow = merged_workflow.filter(
  (workflow, index) =>
    !unique_objworkflow.some((obj) => isObjEqual(obj, workflow)) &&
    unique_objworkflow.push(workflow)
);

console.log(unique_objworkflow); // Output: [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 3, b: 5 }]
```

## Conclusion

By following these steps, we successfully merged two arrays of objects and filtered out duplicates based on their properties. This approach ensures that only unique objects remain, even if their keys and values are the same in both arrays.
