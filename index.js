const employee = {
    name: `Sherlock Holmes`,
    streetAddress: `21B Baker Street`,
}

console.log(deleteFromEmployeeByKey(employee, name))

function updateEmployeeWithKeyAndValue(obj, key, value){
   return {
    ...obj,
    [key]: value,
   };   
}

//console.log(updateEmployeeWithKeyAndValue(employee, `John Watson`, `21A Baker Street`))

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
          obj[key]=value;
          return obj;
}

//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, `John Watson`, `21A Baker Street`))

function deleteFromEmployeeByKey(obj, key){
    const newObj2 = {...obj[key]}
    delete newObj2[key]
    return newObj2;
}

//console.log(deleteFromEmployeeByKey(employee, name))

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}

//console.log(destructivelyDeleteFromEmployeeByKey(employee, name))