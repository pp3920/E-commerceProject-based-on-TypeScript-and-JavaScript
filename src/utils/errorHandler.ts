

// error can be like data is empty

// data error 

// network error
  export class errorHandler extends Error {
  constructor(message:string) {
    super(message);
    this.name = "Data  Error ";  //error name
  }
};
