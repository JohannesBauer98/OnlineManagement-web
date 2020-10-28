export interface IToken {
    accessToken: string,
    expiresOn: Date,
}

export class Token implements IToken {
    constructor(
        public accessToken: string = "",
        public expiresOn: Date = new Date(),
    ) {}
}
