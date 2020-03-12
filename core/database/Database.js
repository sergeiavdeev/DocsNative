import React from 'react'
import * as SQLite from 'expo-sqlite';

//export const db = SQLite.openDatabase('Docs', 1);

export default class Database {

  constructor() {

  }


  init() {
    this.db.transaction(tx => {
      tx.executeSql("create table if not exists Task (id text primary key, title text, author text)");
    })
  }

  static getInstance() {
    return tSQLite.openDatabase('Docs', 1);
  }
}
