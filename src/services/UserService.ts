import User from "@/models/User";

export default class UserService {
    getInfo(): User {
        return new User("1", "Test@test.de", "Test");
    }
}