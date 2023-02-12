export const SQL_PERSON_VIEW = {
  VIEW_EXCEL:
    "SELECT ps.id_person AS ID,ps.first_name AS PRIMER_NOMBRE,ps.second_name AS SEGUNDO_NOMBRE,ps.first_last_name AS PRIMER_APELLIDO,ps.second_last_name AS SEGUNDO_APELLIDO,ps.phone AS TELEFONO,ps.date_birth AS FECHA_NACIMIENTO,ps.place_birth AS LUGAR_NACIMIENTO,ps.address AS DIRECCION,ps.occupation AS OCUPACION,ps.type_document AS TIPO_DOCUMENTO,ps.document_number AS NUMERO_DOCUMENTO,ps.place_expedition AS LUGAR_EXPEDICION,ps.gender AS GENERO,ps.type_blood AS TIPO_SANGRE,ps.status_civil AS ESTADO_CIVIL,ps.stratum AS ESTRATP,ps.sisben AS SISBEN,ps.level_education AS NIVEL_EDUCACION,ps.certificate AS CERTIFICADO,ps.state_tuition AS ESTADO_MATRICULA,ps.date_tuition_start AS FECHA_INICIO,ps.date_tuition_end AS FECHA_FIN,ps.email AS CORREO,ps.balance AS ABONO,ps.reference_family AS REFERENCIA_FAMILIAR,ps.addres_reference AS DIRECCION_REFERENCIA,veh.type_vehicle AS TIPO_VEHICULO,veh.license_plate AS PLACA,veh.expiration_soat AS EXPIRACION_SOAT,veh.expiration_tecnomechanic AS EXPIRACION_TECNICOMECANICA,cour.type_course AS TIPO_CURSO,cour.price AS PRECIO \
        FROM person ps \
        INNER JOIN course cour ON cour.id_course = ps.id_course \
        INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle \
        ",
  VIEW_CERTIFICADO:
  "SELECT ps.id_person AS ID,ps.first_name AS PRIMER_NOMBRE,ps.second_name AS SEGUNDO_NOMBRE,ps.first_last_name AS PRIMER_APELLIDO,ps.second_last_name AS SEGUNDO_APELLIDO,ps.phone AS TELEFONO,ps.date_birth AS FECHA_NACIMIENTO,ps.place_birth AS LUGAR_NACIMIENTO,ps.address AS DIRECCION,ps.occupation AS OCUPACION,ps.type_document AS TIPO_DOCUMENTO,ps.document_number AS NUMERO_DOCUMENTO,ps.place_expedition AS LUGAR_EXPEDICION,ps.gender AS GENERO,ps.type_blood AS TIPO_SANGRE,ps.status_civil AS ESTADO_CIVIL,ps.stratum AS ESTRATP,ps.sisben AS SISBEN,ps.level_education AS NIVEL_EDUCACION,ps.certificate AS CERTIFICADO,ps.state_tuition AS ESTADO_MATRICULA,ps.date_tuition_start AS FECHA_INICIO,ps.date_tuition_end AS FECHA_FIN,ps.email AS CORREO,ps.balance AS ABONO,ps.reference_family AS REFERENCIA_FAMILIAR,ps.addres_reference AS DIRECCION_REFERENCIA,veh.type_vehicle AS TIPO_VEHICULO,veh.license_plate AS PLACA,veh.expiration_soat AS EXPIRACION_SOAT,veh.expiration_tecnomechanic AS EXPIRACION_TECNICOMECANICA,cour.type_course AS TIPO_CURSO,cour.price AS PRECIO \
        FROM person ps \
        INNER JOIN course cour ON cour.id_course = ps.id_course \
        INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle \
        WHERE ps.certificate = 'CERTIFICADO' \
        ORDER BY ps.first_name ASC",
  VIEW_NO_CERTIFICADO:
  "SELECT ps.id_person AS ID,ps.first_name AS PRIMER_NOMBRE,ps.second_name AS SEGUNDO_NOMBRE,ps.first_last_name AS PRIMER_APELLIDO,ps.second_last_name AS SEGUNDO_APELLIDO,ps.phone AS TELEFONO,ps.date_birth AS FECHA_NACIMIENTO,ps.place_birth AS LUGAR_NACIMIENTO,ps.address AS DIRECCION,ps.occupation AS OCUPACION,ps.type_document AS TIPO_DOCUMENTO,ps.document_number AS NUMERO_DOCUMENTO,ps.place_expedition AS LUGAR_EXPEDICION,ps.gender AS GENERO,ps.type_blood AS TIPO_SANGRE,ps.status_civil AS ESTADO_CIVIL,ps.stratum AS ESTRATP,ps.sisben AS SISBEN,ps.level_education AS NIVEL_EDUCACION,ps.certificate AS CERTIFICADO,ps.state_tuition AS ESTADO_MATRICULA,ps.date_tuition_start AS FECHA_INICIO,ps.date_tuition_end AS FECHA_FIN,ps.email AS CORREO,ps.balance AS ABONO,ps.reference_family AS REFERENCIA_FAMILIAR,ps.addres_reference AS DIRECCION_REFERENCIA,veh.type_vehicle AS TIPO_VEHICULO,veh.license_plate AS PLACA,veh.expiration_soat AS EXPIRACION_SOAT,veh.expiration_tecnomechanic AS EXPIRACION_TECNICOMECANICA,cour.type_course AS TIPO_CURSO,cour.price AS PRECIO \
        FROM person ps \
        INNER JOIN course cour ON cour.id_course = ps.id_course \
        INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle \
        WHERE ps.certificate = 'NO CERTIFICADO' \
        ORDER BY ps.first_name ASC",
};
