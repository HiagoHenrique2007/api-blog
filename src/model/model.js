import mysql from 'mysql2';

class Model {

  #host = HOST_DB;
  #user = USER_DB;
  #password PASSWORD_DB;
  #port = PORT_DB;
  #database = DATABASE_DB;

  #db = {
    host,
    user,
    password,
    port,
    database
  }

  #connection;
  #table = 'articles';
  // data base fields: id, banner_path, title, date, description, content(6); 

  // querys will be used;
  #querySelect = `SELECT * FROM ${this.#table}`;
  #queryInsert = `INSERT INTO ${this.#table} VALUES(?, ?, ?, ?, ?, ?)`;
  #queryDelete = `DELETE FROM ${this.#table} WHERE id=?`;
  #queryTable = `CREATE TABLE IF NOT EXISTS ${this.#table}(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    banner_path VARCHAR(255),
    title VARCHAR(255),
    date VARCHAR(255),
    description VARCHAR(255),
    content VARCHAR(255)
  );`;


  constructor() {
    this.createConnection();
  }

  async createConnection() {
    this.#connection = await mysql.createConnection(this.#db).promise();
  }

  async createTable() {

    try {

      await this.#connection.query(this.#queryTable);
      return { ok: true };

    } catch(dbError) {
      console.log(`erro na table: ${dbError}`);
      return { ok: false, error: dbError };
    }

  }

  async getArticles(code) {

    code = code.toUpperCase();
    try {

      const [rows] = await this.#connection.query(this.#querySelect, [code]);
      return { ok: true, rows };

    } catch(dbError) {
      return { ok: false, error: dbError };
    }
  
  }

  async addArticle() {

    try {

      await this.#connection.query(this.#queryInsert, []);
      return { ok: true };

    } catch(dbError) {
      return { ok: false, error: dbError };
    }

  }

  async updateArticle() {

    try {
      
      await this.#connection.query(this.#queryUpdate, []);
      return { ok: true };
    
    } catch(dbError) {
      return { ok: false, error: dbError };
    }

  }

  async deleteArticle() {

    try {
    
      await this.#connection.query(this.#queryDelete, []);
      return { ok: true };

    } catch(dbErro) {
      return { ok: false, error: dbError };
    }

  }

}

export const model = new Model();
