(
  ()=>{
    type Gender = 'M'|'F';

    interface PersonProps {
      name: string;
      gender: Gender;
      birthdate: Date;
    };

    class Person {
      public birthdate: Date;
      public gender: Gender;
      public name: string;

      constructor ({ name, gender, birthdate }: PersonProps ){
        this.birthdate = birthdate;
        this.gender= gender;
        this.name = name;
      };
    };

    // const newPerson = new Person('Fernando', 'M', new Date('1997-07-11'));
    // console.log({ newPerson });
  
    interface UserProps {
      birthdate: Date;
      email: string;
      gender: Gender;
      name: string;
      role: string;
    };

    class User extends Person {
      public lastAccess;
      public email;
      public role;

      constructor({ email, role, name, gender, birthdate }: UserProps){
        super({ name, gender, birthdate });
        this.lastAccess = new Date();
        this.email = email;
        this.role = role;
      };

      checkCredentials() {
        return true;
      };
    };

    interface UserSettingsProps {
      birthdate: Date;
      email: string;
      gender: Gender;
      lastFolder: string;
      name: string;
      role: string;
      workingDirectory: string;
    };

    class UserSettings extends User {
      public workingDirectory: string;
      public lastFolder: string;

      constructor({
        workingDirectory,
        lastFolder,
        email,
        role,
        name,
        gender,
        birthdate
      }: UserSettingsProps) {
        super({ email, role, name, gender, birthdate });
        this.workingDirectory = workingDirectory;
        this.lastFolder = lastFolder;
      };
    };

    const newUserSettings = new UserSettings({
      workingDirectory: '/usr/home',
      lastFolder: '/home',
      email: 'fernando@mail.com',
      role: 'Admin',
      name: 'Fernando',
      gender: 'M',
      birthdate: new Date('1997-07-11')
    });

    console.log({ newUserSettings });
  }
)();
