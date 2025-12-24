// Example TypeScript file to test CodeRabbit

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export class UserService {
  private users: User[] = [];

  addUser(name: string, email: string): User {
    const user: User = {
      id: this.users.length + 1,
      name: name,
      email: email,
      createdAt: new Date()
    };

    this.users.push(user);
    return user;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
