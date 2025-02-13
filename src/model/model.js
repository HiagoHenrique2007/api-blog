import mysql from 'mysql2';

class Model {

  #host = HOST_DB;
  #user = USER_DB;
  #password = PASSWORD_DB;
  #port = PORT_DB;
  #database = DATABASE_DB;

  #db = {
    host: this.#host,
    user: this.#user,
    password: this.#password,
    database: this.#database,
    port: this.#port,
  }

  #connection;
  #table = 'articles';
  // data base fields: id, banner_path, title, date, description, content(6); 

  // querys will be used;
  #querySelect = `SELECT * FROM ${this.#table}`;
  #queryInsert = `INSERT INTO ${this.#table} VALUES(?, ?, ?, ?)`;
  #queryDelete = `DELETE FROM ${this.#table} WHERE id=?`;
  #queryTable = `CREATE TABLE IF NOT EXISTS ${this.#table}(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    banner_path VARCHAR(255),
    title VARCHAR(255),
    date VARCHAR(255),
    description VARCHAR(255),
    content VARCHAR(255)
  );`;

  async createConnection() {
    this.#connection = await mysql.createConnection(this.#db).promise();
  }

  constructor() {
    this.createConnection();
  }

  async createTable() {

    try {

      await this.#connection.query(this.#queryTable);
      return { ok: true };

    } catch(dbError) {
      return { ok: false, error: dbError };
    }

  }

  async getArticles() {

    try {

      const [rows] = await this.#connection.query(this.#querySelect);
      return { ok: true, rows };

    } catch(dbError) {
      return { ok: false, error: dbError };
    }
  
  }

  async addArticle(banner_path, title, date, description, contentArticle) {

    try {

      await this.#connection.query(this.#queryInsert, [banner_path, title, date, description, contentArticle]);
      return { ok: true };

    } catch(dbError) {
      return { ok: false, error: dbError };
    }

  }

  // async updateArticle(id) {

  //   try {
      
  //     await this.#connection.query(this.#queryUpdate, [id]);
  //     return { ok: true };
    
  //   } catch(dbError) {
  //     return { ok: false, error: dbError };
  //   }

  // }

  async deleteArticle(id) {

    try {
    
      await this.#connection.query(this.#queryDelete, [id]);
      return { ok: true };

    } catch(dbError) {
      return { ok: false, error: dbError };
    }

  }

  async isOk(app) {
    app.addHook('onRequest', async (request, reply) => {

      // verifica se existe o token na requisição
      const tokenAdmin = request.headers.authorization; // Authorization é um metadado do header usado para passar tokens de acesso.
      if(!tokenAdmin) {
        return reply.code(401).send({ ok: false, message: 'Token Ausente!' });
      }

      // verifica se o token é o token valido
      const tokenIsCorrect = tokenAdmin === process.env.TOKEN_ADMIN ? true : false
      if(!tokenIsCorrect) {
        return reply.code(401).send({ ok: false, message: 'Token Invalido!' });
      }
    })
  }

}

export const model = new Model();
