import { PersonalInfo, EmploymentInfo, AccountInfo } from './index';
export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    personalInfo: PersonalInfo;
    employmentInfo: EmploymentInfo;
    accountInfo: AccountInfo;
}
