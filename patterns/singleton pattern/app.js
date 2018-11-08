//SINGLETON  - is an imediate obj construction can be initiate only once. - research more on net!

const Singleton = (function(){
  let instance;

  function createInstance() {
    const obj = new Object({name: 'bogdan', age: 44});
    return obj;
  }

  return {
    getInstance :function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
// console.log(instanceA);
const instanceB = Singleton.getInstance();
// console.log(instanceB);

console.log(instanceA === instanceB); // true