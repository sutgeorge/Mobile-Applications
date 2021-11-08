import dataStore from 'nedb-promise';

export class UserStore {
  constructor({ filename, autoload }) {
    this.store = dataStore({ filename, autoload });
  }
  
  async findOne(props) {
    return this.store.findOne(props);
  }
  
  async insert(user) {
    return this.store.insert(user);
  };

  async getAll() {
    return this.store.find({}, (error, docs) => {
      return error ? error : docs;
    });
  }
}

export default new UserStore({ filename: './db/users.json', autoload: true });