export const SQL_PERSON_UPDATE = {
  CONFIRMPERSON:"SELECT COUNT(per.id_person) AS amount \
  FROM person per\
  WHERE lower(per.document_number)=lower($11) AND per.id_person <>$1",

  UPDATE:
    "UPDATE person SET  first_name=$2,second_name=$3,first_last_name=$4,second_last_name=$5,phone=$6,date_birth=$7,place_birth=$8,address=$9,occupation=$10,type_document=$11,document_number=$12,place_expedition=$13,gender=$14,type_blood=$15,status_civil=$16,stratum=$17,sisben=$18,level_education=$19,certificate=$20,state_tuition=$21,date_tuition_start=$22,date_tuition_end=$23,email=$24,balance=$25,reference_family=$26,addres_reference=$27,photo64=$28,photo_fingerprint=$29,photo_fingerprint64=$30,id_vehicle=$31, id_course=$32\
    WHERE id_person = $1 \
    RETURNING id_person"
};
