class User {

  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const user = {id, name, room};
    this.users.push(user);
    return { user };
  }

  getUserList(room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map((user) => user.name);
    return namesArray;
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  removeUser(id) {
    const indexUser = this.users.findIndex((user) => user.id === id);

    if (indexUser !== -1) return this.users.splice(indexUser, 1)[0];
  }
}

export default new User();