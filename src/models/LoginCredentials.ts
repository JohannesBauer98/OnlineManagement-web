import DtoObject from '@/models/DtoObject';

export interface ILoginCredentials {
    username: string;
    password: string;
}

export class LoginCredentials extends DtoObject<LoginCredentials> implements ILoginCredentials{
    username: string = "";
    password: string = "";
}