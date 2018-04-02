import { PersonalInfo } from './personalInfo.model';
export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    personalInfo: PersonalInfo;
}
