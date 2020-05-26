import { Story } from './story';

export class Ssuser {

  //constructor() { }

  constructor(
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    dob: Date) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.dob = dob;
  }

  id: number;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: Date;

  stories: Story[];
}
