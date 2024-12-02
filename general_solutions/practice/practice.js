const old_data = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];

const new_data = [
  { a: 1, b: 2 },
  { a: 3, b: 5 },
];

const unique_data = [];

// merge the two arrays together
const merged_data = [...old_data, ...new_data];

console.log(merged_data);

//define object equality using JSON.stringify
const isObjEqual = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

const unique_workflow = merged_data.filter(
  (data) =>
    !unique_data.some((obj) => isObjEqual(obj, data)) && unique_data.push(data)
);

console.log(unique_data);
