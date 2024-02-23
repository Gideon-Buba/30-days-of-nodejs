{
  /*
    Buffer.alloc(size);
    this method is used to create a Buffer object of given length with initializing all the value to fill or 0 .
*/
}
const buff = Buffer.alloc(20);
console.log(buff);

{
  /*
    Buffer.allocUnsafe(size): 
    This method is used to create a Buffer object of given length but it will not initialize the values.
    Due to which contents of the newly created buffer are not known which causes a security threat because it might contain some sensitive or confidential data.
*/
}
const buff2 = Buffer.allocUnsafe(10);
console.log("buff2: ", buff2);

{
  /*
    Buffer.from() : This method is used to create a Buffer from an string, object , array or buffer.
*/
}
const buff3 = Buffer.from("Hello", "utf-8");
console.log("buff3: ", buff3);
{
  /*
    Buffer.alloc(size);
    this method is used to create a Buffer object of given length with initializing all the value to fill or 0 .
*/
}
