(
  ()=>{
    type Gender = 'M'|'F';

    class Person {
      constructor (
        public name: string,
        public gender: Gender,
        public birthDay: Date
      ){};
    };

    const newPerson = new Person('Fernando', 'M', new Date('1997-07-11'));
    console.log({ newPerson });
  
    class User extends Person {
      public lastAccess;

      constructor(
        public email: string,
        public role: string,
        name: string,
        gender: Gender,
        birthdate: Date,
      ){
        super(name, gender, birthdate);
        this.lastAccess = new Date();
      };

      checkCredentials() {
        return true;
      };
    };

    class UserSettings extends User {
      constructor(
        public workingDirectory: string,
        public lastFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthday: Date,
      ){
        super(email, role, name, gender, birthday);
      };
    };

    const newUserSettings = new UserSettings(
      '/usr/home',
      '/home',
      'fernando@mail.com',
      'Admin',
      'Fernando',
      'M',
      new Date('1997-07-11')
    );

    console.log({ newUserSettings });
  }
)();
