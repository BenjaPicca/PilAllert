import Recordatorio from "../Services/Recordatorios.js"



const insertRecordatorio = async (req, res) => {
    const recordatorio= req.body
    
    
    
    
    try {
        console.log(recordatorio)
        await Recordatorio.insertRecordatorio(recordatorio);
         res.status(200).json({ message: "Se ha insertado Correctamente",usuario });
    }
   catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error al insertar en base de datos' });
  }
}

export default {
    insertRecordatorio
}