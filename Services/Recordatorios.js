
import { pool } from "../dbconfig.js";
import "dotenv/config";

const insertRecordatorio = async (recordatorio) => {
    try {
      const rows = await pool.query(`
        INSERT INTO public."Recordatorio"
        ("NombreMedicamento", "Mail_Usuario", "Fecha", "Dosis", "Fecha")
        VALUES ($1, $2, $3)`,
        [recordatorio.nombreMed, recordatorio.mail_usuario, new Date(), recordatorio.dosis]);
      return rows;
    } catch (err) {
      throw err; 
    }
  };
  

  const getRecbyMail = async (mail_usuario) => {

    console.log(mail_usuario,'lkj')

    try {
        const rows = await pool.query(`
    SELECT *
         FROM public."Recordatorio" 
         WHERE "Mail_Usuario"=$1`,
            [recordatorio.mail_usuario])
            console.log(rows)
        return rows;
    }
    catch (err) {

        throw new Error;
    }
}




export default {
    insertRecordatorio,
    getRecbyMail

}