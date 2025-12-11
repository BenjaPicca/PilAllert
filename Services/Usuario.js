
import { pool } from "../dbconfig.js";
import "dotenv/config";

const insertUsuario = async (usuario) => {
    try {
      const rows = await pool.query(`
        INSERT INTO public."Usuario"
        ("NombreUsuario", "Mail", "Contraseña")
        VALUES ($1, $2, $3)`,
        [usuario.nombre, usuario.mail, usuario.contraseña]);
      return rows;
    } catch (err) {
      if (err.code === '23505') {
        
        throw new Error('Ya existe un usuario con ese mail');
      }
      throw err; 
    }
  };
  

  const getByMail = async (mail) => {

    console.log(mail,'lkj')

    try {
        const rows = await pool.query(`
    SELECT "Mail", "NombreUsuario"
         FROM public."Usuario" 
         WHERE "Mail"=$1`,
            [mail])
            console.log(rows)
        return rows;
    }
    catch (err) {

        throw new Error;
    }
}

const getAllByMail = async (mail) => {


    try {
        const result = await pool.query(`
        SELECT *
             FROM public."Usuario" 
             WHERE "Mail"=$1`,
            [mail])
        console.log(result.rows)
        return result.rows;
    }
    catch (err) {

        throw new Error;
    }
}


export default {
    insertUsuario,
    getByMail,
    getAllByMail,

}