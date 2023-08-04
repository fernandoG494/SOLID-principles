interface ClaseAProps {
  a1: number;
  a2: number;
};

class ClaseA {
  public atrib1;
  public atrib2;

  constructor({a1, a2}: ClaseAProps){
    this.atrib1 = a1;
    this.atrib2 = a2;
  }
};

interface ClaseBProps {
  a3: number;
  a4: number;
};

class ClaseB {
  public atrib3;
  public atrib4;

  constructor({a3, a4}: ClaseBProps){
    this.atrib3 = a3;
    this.atrib4 = a4;
  }
};

// ! EXTENDED
// interface ClaseBProps {
//   a3: number;
//   a4: number;
// };

// class claseB extends claseA {
//   public atrib3;
//   public atrib4;

//   constructor(a1, a2, a3, a4){
//     super({ a1, a2 });
//     this.atrib3 = a3;
//     this.atrib4 = a4;
//   }
// };

//? COMPOUND
interface CompuestoABProps {
  a1: number;
  a2: number;
  a3: number;
  a4: number;
};

class CompuestoAB {
  public elementA;
  public elementB;

  constructor({a1, a2, a3, a4}: CompuestoABProps){
    this.elementA = new ClaseA({ a1, a2 });
    this.elementB = new ClaseB({ a3, a4 });
  };
};
