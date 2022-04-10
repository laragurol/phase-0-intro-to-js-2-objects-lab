const employee = { 
    name: "Lara", 
    streetAdress: "xyz" }; 
    
    function updateEmployeeWithKeyAndValue(obj, key, value) {
        const newObj = { ...obj };
      
        newObj[key] = value;
      
        return newObj;
      }
      
      function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
        obj[key] = value; 
      
        return obj;
      }

      function deleteFromEmployeeByKey(obj, key, value) {
          const newObj = { ...obj };

          delete newObj.key;

          newObj[key] = value;

          return newObj;
      }

      function destructivelyDeleteFromEmployeeByKey(obj, key, value) {

          delete obj.key;
          
          obj[key] = value;

          return obj;
      }
// Write your solution in this file!
