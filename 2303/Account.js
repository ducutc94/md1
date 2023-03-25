class Account {
    username;
    password;
    email;
    sdt;

    constructor(username, password, email, sdt) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.sdt = sdt;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getEmail() {
        return this.email;
    }

    getSdt() {
        return this.sdt;
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.username = password;
    }

    setEmail(email) {
        this.username = email;
    }

    setSdt(sdt) {
        this.username = sdt;
    }
}