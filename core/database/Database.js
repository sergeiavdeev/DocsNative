import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Docs', '1');

export default class Database {

  constructor() {
    db.transaction(tx => {
      tx.executeSql("create table if not exists Task (id text primary key, title text, author text)");
      tx.executeSql("create table if not exists User (id integer primary key autoincrement, hash text, apiUrl text, deviceKey)");
      tx.executeSql("insert into User (hash, apiUrl, deviceKey) values('sddgffffgdf', 'http://fffff', 'rkkfj')");
      tx.executeSql("insert into User (hash, apiUrl, deviceKey) values('sddgfgdf', 'http://dfgdfg', 'rkffkfj')");
    });
  }

  static getUsers(callback) {
    db.transaction(tx => {
      tx.executeSql("select * from User", [],(_, {rows: {_array}}) => {
        callback(_array);
      });
    });
  }
}
