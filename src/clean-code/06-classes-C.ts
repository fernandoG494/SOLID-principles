(
  ()=>{
    type Gender = 'M'|'F';

    interface PersonProps {
      name: string;
      gender: Gender;
      birthdate: Date;
    };

    interface UserProps {
      email: string;
      role: string;
    };

    interface SettingsProps {
      lastFolder: string;
      workingDirectory: string;
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

    class User {
      public lastAccess;
      public email;
      public role;

      constructor({ email, role }: UserProps){
        this.lastAccess = new Date();
        this.email = email;
        this.role = role;
      };

      checkCredentials() {
        return true;
      };
    };

    class Settings {
      public workingDirectory: string;
      public lastFolder: string;

      constructor({ workingDirectory, lastFolder }: SettingsProps) {
        this.workingDirectory = workingDirectory;
        this.lastFolder = lastFolder;
      };
    };

    class UserSettings {
      public person: Person;
      public user: User;
      public settings: Settings;

      constructor({
        name, gender, birthdate,
        email, role,
        lastFolder, workingDirectory
      }: UserSettingsProps) {
        this.person = new Person({ name, gender, birthdate });
        this.user = new User({ email, role });
        this.settings = new Settings({ lastFolder, workingDirectory });
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
