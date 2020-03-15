import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Docs', '1');

export default class Database {

  static init() {
    db.transaction(tx => {
      tx.executeSql("create table if not exists Task (id text primary key, title text, author text)");
      tx.executeSql("create table if not exists User (id integer primary key autoincrement, hash text, apiUrl text, deviceKey)");
    });
  }

  static user = {
    get: () => {
      return new Promise((resolve, reject) => {
        db.transaction(tx =>{
          tx.executeSql("select * from User LIMIT 1", [], (transaction, res) => {
            if (res.rows.length > 0) {
              resolve(res.rows.item(0));
            } else {
              resolve(null);
            }
          }, (transaction, e) => {
            reject(e);
          });
        });
      })
    },

    add: (hash, apiUrl, deviceKey) => {
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql("insert into User (hash, apiUrl, deviceKey) values(?, ?, ?)",
            [hash, apiUrl, deviceKey],
            (tran, result) => {
              resolve(result);
            },
            (tran, e) => {
              reject(e);
            });
        });
      });
    }
  }

  static task = {
    getAll: (filter) => {
      if(!filter)filter='';
      console.log('Filter: ' + filter);
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          if (filter && filter.length > 0) {
            let sql = "select * from Task where title like ? or author like ?";
            tx.executeSql(sql,['%'+filter+'%', '%'+filter+'%'],
              (tran, res) => {
                resolve(res.rows);
              },
              (tran, err) => {
                reject(err);
              });
          } else {
            tx.executeSql("select * from Task", [],
              (tran, res) => {
                resolve(res.rows);
              },
              (tran, err) => {
                reject(err);
              })
          }
        })
      });
    },

    add(task) {
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql("insert into Task (id, title, author) values(?, ?, ?)", [task.id, task.title, task.author],
            (tran, res) => {
              resolve(res);
            },
            (tran, err) => {
              reject(err);
            });
        });
      });
    }
  }
}
