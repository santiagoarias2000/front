import { Response } from 'express';
import pool from '../../config/connection/connectionDB';
class PersonToListPDF{
    public static async getPerson(sqlPDF:string, parameter:any, res: Response): Promise<any>{
        await pool.result(sqlPDF, parameter)
        .then((result)=>{
            let excel:any[];
            excel = [];
            result.rows.map((saveResult:any)=>{
                excel.push({Id: saveResult.id, PRIMER_NOMBRE: saveResult.primerNombre,SEGUNDO_NOMBRE:saveResult.segundoNombre,PRIMER_APELLIDO:saveResult.primerApellido,SEGUNDO_APELLIDO:saveResult.segundoApellido,TELEFONO:saveResult.telefono,FECHA_NACIMIENTO:saveResult.fechaNacimiento,LUGAR_NACIMIENTO:saveResult.lugarNacimiento,DIRECCION:saveResult.direccion,OCUPACION:saveResult.ocupacion,TIPO_DOCUMENTO:saveResult.tipoDocumento,NUMERO_DOCUMENTO:saveResult.numeroDocumento,LUGAR_EXPEDICION:saveResult.lugarExpedicion,GENERO:saveResult.genero,RH:saveResult.tipoSangre,ESTADO_CIVIL:saveResult.estadoCivil,SISBEN:saveResult.sisben,NIVEL_EDUCACION:saveResult.nivelEducacion,ESTADO_CERTIFICADO:saveResult.certificado,ESTADO_MATRICULA:saveResult.estadoMatricula,FECHA_INICIO:saveResult.fechaInicio,FECHA_FIN:saveResult.fechaFin,CORREO:saveResult.correo,ABONO:saveResult.abono,REFERENCIA_FAMILIAR:saveResult.referenciaFamiliar,DIRECCION_REFERENCIA:saveResult.direccionReferencia,TIPO_VEHICULO:saveResult.tipoVehiculo,PLACA:saveResult.placa,EXPIRACION_SOAT:saveResult.expiracionSoat,EXPIRACION_TECNICOMECANICA:saveResult.expiracionTecnicomecanica,TIPO_CURSO:saveResult.tipoCurso,PRECIO:saveResult.precio});
            });
            res.status(200).json(excel);
        })
        .catch((myErr)=>{
            console.log('Error in daos: ', myErr);
            res.status(400).json({respuesta:'No esta trabajando el daos en el ToList de persona'});
        });
    }
}
export default PersonToListPDF;