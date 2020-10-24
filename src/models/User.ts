import DtoObject from './DtoObject';

export default class User extends DtoObject<User> {
    constructor(
        public id:string = "",
        public email:string = "",
        public name:string = "",
    ) {super();}
}