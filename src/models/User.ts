export class User {
    userID: number;
    userName: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    state: string;
    phoneNumber: string;
    email: string;

    constructor(
        userID: number, 
        userName: string, 
        firstName: string, 
        lastName: string, 
        country: string, 
        city: string, 
        state: string, 
        phoneNumber: string, 
        email: string) {

        this.userID = userID;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}