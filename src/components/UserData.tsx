export interface User {
    username: string,
    transactions: [
        {
            date: string,
            type: 'credit' | 'debit',
            amount: number,
            category: string,
            reason: string,
        }
    ]
}

class DB {
    user: User;
    private template: User = {
        username: '',
        transactions: [
            {
                date: '',
                type: 'credit',
                amount: 0,
                category: '',
                reason: '',
            }
        ]
    }

    constructor() {
        const stored = localStorage.getItem("i-user");
        const storedUser: User = stored ? JSON.parse(stored) : this.template;

        if (!storedUser.username) {
            localStorage.setItem("i-user", JSON.stringify(this.template));
        }

        this.user = storedUser;
    }

    getUser() {
        return this.user
    }

    addUser(data: Omit<User, "transactions">): void {
        const newUser: User = {
            ...this.template,
            username: data.username,
        };

        this.user = newUser;
        localStorage.setItem("i-user", JSON.stringify(newUser));
    }

    addTransaction(data: Omit<User, "username">): void {
        const newUser: User = {
            ...this.template,
            transactions: [...this.user.transactions, data.transactions],
        };

        this.user = newUser;
        localStorage.setItem("i-user", JSON.stringify(newUser));
    }

}

export default DB