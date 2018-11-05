// error handle
const user = {email: 'petre@gmail.com'};
 try{
   //produce a ReferenceError
    // myFunction();

    // produce a TypeError
    // null.myFunction();

    // produce a SintaxError
    // eval('h3llo'); // console log a unexpected indentifyer

    // produce URIError
    // decodeURIComponent('%');

    // error by throw word
    if(!user.email){
      // throw 'User has no name';
      throw new SyntaxError('User has no name');
    }
 } catch(error) {
  console.log(error);
  // console.log(error.message); // just error message
  // console.log(error.name); // just error name
  // console.log(error instanceof ReferenceError); // return boolean
 }finally {
   console.log(`in spite of error finally it' work`);
 }

 console.log('Programul merge indiferent de eroare');