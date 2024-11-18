// solving the problem of finding a unique array of objects

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

console.log(unique_objworkflow);
