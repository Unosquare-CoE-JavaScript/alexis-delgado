class Document {}

class Machine {
  constructor() {
    if (this.constructor === "Machine") {
      throw new Error("Machine is abstract");
    }
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    //
  }

  fax(doc) {
    //
  }

  scan(doc) {
    //
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented`;
    super(msg);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}

class OldFashionPrinter extends Machine {
  print(doc) {
    // ok
  }

  // fax(doc) {
  //     // do nothing
  //     // principle of least surprise
  // }

  scan(doc) {
    throw new NotImplementedError("OldFashionPrinter.scan");
  }
}

// ISP = segregate (split up)
class Printer {
  constructor() {
    if (this.constructor.name === "Printer")
      throw new Error("Printer is abstract");
  }

  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner")
      throw new Error("Scanner is abstract");
  }

  scan() {}
}

class Photocopier {
  print() {}
  scan() {}
}

let printer = new OldFashionPrinter();
printer.scan();
