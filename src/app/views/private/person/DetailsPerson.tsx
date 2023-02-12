import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Person from "../../../models/Person";
import ApiBack from "../../../utilities/domains/ApiBack";
import noFoto from "../../../../assets/image/profile.png";
import ServicePrivate from "../../../services/ServicePrivate";
import { getLocalDate } from "../../../utilities/functions/DateFormat";
import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
import image from "./../../../../assets/image/autobochica2.png"
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const DetailsPerson = () => {
  let { idPerson } = useParams();
  const regresar = useNavigate();
  const [allReady, setAllReady] = useState<boolean>(false);
  let loadCompleted = allReady !== undefined;
  const [objPerson, setObjPerson] = useState<Person>();
  const [photoBase64, setPhoteBase64] = useState<string>("");
  const [photoFingerprint64, setPhotoFingerprint64] = useState<string>("");
  const saldo1:any = objPerson?.course.price;
  const saldo2:any = objPerson?.balance;
  const saldoTotal:any = saldo1- saldo2;

  function settingDate(dateIn: string | undefined) {
    Date.parse(dateIn!);
    const dateOut = new Date();
    return dateOut.toLocaleDateString();
  }
  const docDefinition: any = {
    content: [
      {
        table: {
          widths: ["*", "*", "*"],
          body: [
            [
              {
                image: image.toString(),
                // height:150,
                width: 50,
                style: "image",
                rowSpan: 3,
              },
              { text: 'INFORMACIÓN DATOS DEL ALUMNO (MATRICULA)',rowSpan: 3,style: "header" },
              {text: 'CÓDIGO: '+ objPerson?.course.idCourse, style: "headerPrincipal"},
            ],
            [
              {},
              {},
              {text: 'VERSIÓN: A',style: "headerPrincipal"},
            ],
            [
              {},
              {},
              {text: 'VIGENCIA: '+ settingDate(objPerson?.dateTuitionStart), style: "headerPrincipal"},
            ],
            [
              {text: '', colSpan: 3},
              {},
              {},
            ],
            [
              {
                text:
                  "NOMBRES: " +
                  " " +
                  objPerson?.firstName +
                  " " +
                  objPerson?.secondName +
                  "       " +
                  "APELLIDOS: " +
                  " " +
                  objPerson?.firstLastName +
                  " " +
                  objPerson?.secondLastName,
                style: "header",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "TIPO DE DOCUMENTO:  " + objPerson?.typeDocument,
                style: "header",
                colSpan: 1,
              },
              {
                text:
                  "No. " +
                  objPerson?.documentNumber +
                  "    RH: " +
                  objPerson?.typeBlood +
                  "    GENERO: " +
                  objPerson?.gender,
                style: "header",
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: "LUGAR DE NACIMIENTO: " + objPerson?.placeBirth,
                style: "header",
                colSpan: 2,
              },
              {},
              {
                text: "FECHA DE NACIMIENTO: " + settingDate(objPerson?.dateBirth),
                style: "header",
                colSpan: 1,
              },
            ],
            [
              {
                text: "DIRECCIÓN DE DOMICILIO: " + objPerson?.address,
                style: "header",
                colSpan: 2,
              },
              {},
              {
                text: "CELULAR: " + objPerson?.phone,
                style: "header",
                colSpan: 1,
              },
            ],
            [
              {
                text: "ESTUDIOS: " + objPerson?.levelEducation,
                style: "header",
              },
              { text: "SISBEN: " + objPerson?.sisben, style: "header" },
              { text: "ESTRATO: " + objPerson?.stratum, style: "header" },
            ],
            [
              {
                text: "PROFESIÓN: " + objPerson?.occupation,
                style: "header",
                colSpan: 1,
              },
              {
                text: "ESTADO CIVIL: " + objPerson?.statusCivil,
                style: "header",
                colSpan: 2,
              },
              {},
            ],
            [
              {
                text: "CATEGORIA LICENCIA: " + objPerson?.course.typeCourse,
                style: "header",
                colSpan: 2,
              },
              {},
              {},
            ],
            [
              {
                text: "PROGRAMA DE FORMACIÓN PARA CONDUCTORES",
                style: "headertittle",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "INTENSIDAD FORMACIÓN TEORICA: 35 HORAS",
                style: "headersub",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "INTENSIDAD FORMACIÓN PRACTICA: 30 HORAS",
                style: "headersub",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "INICIACIÓN DE CLASES: " + settingDate(objPerson?.dateTuitionStart),
                style: "headersub",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "TERMINACIÓN DE CLASES: " + settingDate(objPerson?.dateTuitionEnd),
                style: "headersub",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "VALOR DEL CURSO: " + objPerson?.course.price,
                style: "header",
              },
              { text: "ABONO: " + objPerson?.balance, style: "header" },
              { text: "SALDO: " + saldoTotal, style: "header" },
            ],
            [
              {text: '', colSpan: 3},
              {},
              {},
            ],
            [
              {
                text: "NOTA: LA FALTA A CLASE PRACTICA POR PARTE DEL ALUMNO, SIN PREVIO AVISO DE TRES(3) HORAS DE ANTICIPACIÓN SE DARA POR PERDIDA, Y LA PODRA RECUPERAR CANCELANDO UNA MULTA DE RETARDO. POR VALOR DE 10.000 PESOS",
                style: "headertittle",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {text: '', colSpan: 3},
              {},
              {},
            ],
            [
              {
                text: "COMPROMISOS",
                style: "headertittle",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Acepto cumplir con los requisitos necesarios para la certificación en conducción.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Acredito que la información suministrada al CEA es veridica",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Cumplir con la asistencia a las clases teoricas y prácticas según la programación acordada con el CEA",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Informar con minimo tres(3) horas hábiles de anticipación la cancelación de las clases prácticas",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Realizar el pago de las multas por un valor de 10.000 por instancias y/o retardo a las clases practicas progrmadas teniendo en cuenta las tarifas CEA.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Estoy en pleno conocimiento que tengo un periodo maximo de 3 meses para culminar el proceso de enseñanza mediante clases teoricas y practicas, una vez pasado este tiempo, pierdo los derechos adquiridos con el centro de enseñanza de conducción.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Acepto que posteriormente a los tres(3) meses de la culminacion del proceso de enseñanza CEA AutoClub no se hace responsable del certificado y/o devolución de dinero.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Tengo conocimiento que la escuela no se hace responable del costo de examenes medicos vencidos.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Revisar el proceso del curso de conducción que esta realizando en la aplicación AulaApp y en RUNT en las instalaciones de la escuela.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "En caso de queja, sugerencia o reclamo informar al correo electronico: pqrsautoclub@gmail.com.",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {
                text: "Para personas con discapacidad o mujeres en estado de embarazo: Soy conciente que toda la responsibilidad esta a mi cargo por mis condiciones fisicas",
                style: "headertext",
                colSpan: 3,
              },
              {},
              {},
            ],
            [
              {text: '', colSpan: 3},
              {},
              {},
            ],
            [
              {
                image: photoBase64.toString(),
                height:80,
                alignment: 'center',
                width: 130,
                style: "headertext",
                colSpan: 1,
                rowSpan: 2,
              },
              {image: photoFingerprint64.toString(),
                height:80,
                width: 80,
                alignment: 'center',
                style: "image",
                colSpan: 1,
                rowSpan: 2,},
              {text: 'FIRMA DEL ALUMNO: ',style: "image",rowSpan:2},
            ],
            [
              {},
              {},
              {},
            ],
            [
              {text: 'FIRMA REFERENCIA: ',style: "firmas",rowSpan:3},
              {text: 'DIRECCIÓN REFERENCIA: ',style: "firmas",rowSpan:3},
              {text: 'FIRMA APROBADO: ',style: "firmas",rowSpan:3},
            ],
            
            [
              {},
              {},
              {},
            ],[
              {},
              {},
              {},
            ],
          ],
        },
      },
    ],

    styles: {
      header: {
        fontSize: 10,
        alignment: "center",
      },
      headertittle: {
        fontSize: 10,
        alignment: "center",
        bold: true,
      },
      headertext: {
        fontSize: 10,
        alignment: "left",
      },
      headerPrincipal: {
        fontSize: 10,
        alignment: "left",
        bold: true,
      },
      headersub: {
        fontSize: 10,
        alignment: "left",
      },
      anotherStyle: {
        fontSize: 14,
        italics: true,
        alignment: "center",
      },
      image: {
        alignment: "center",
        fontSize: 10,
        bold: true,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
      },
      firmas: {
        lineHeight:3,
        alignment: "center",
        fontSize: 10,
        padding: "50",
        bold: true,
      },
    },
  };
  const [url, setUrl] = useState("");

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
    });
    const nameUser: any = objPerson?.firstName
      .concat(objPerson.secondName)
      .concat(objPerson.firstLastName)
      .concat(objPerson.secondLastName);
    pdfGenerator.download(nameUser.toString());
  };

  useEffect(() => {
    // Consulta los datos de un Person por su _id
    // ***********************
    const getOnePerson = async () => {
      const urlLoadOnePerson = ApiBack.DETAILS_PERSON + "/" + idPerson;
      const userReceived = await ServicePrivate.requestGET(urlLoadOnePerson);
      if (userReceived) {
        setObjPerson(userReceived);
        setPhoteBase64(userReceived.photo64);
        setPhotoFingerprint64(userReceived.photoFingerprint64);
        setAllReady(true);
      }
    };
    // ***********************
    getOnePerson();
  }, [idPerson]);
  return (
    <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Usuarios</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/home/person/admin">Administración de Información</Link>
            </li>
            <li className="breadcrumb-item active">Detalle de Información</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}
      {loadCompleted ? (
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <b>INFORMACIÓN DE USUARIO</b>
              </div>
              <div className="card-body">
              <div>
                <h5 className="card-title">
                  <b>Nombre: </b>
                  {objPerson?.firstName} {objPerson?.secondName} {objPerson?.firstLastName} {objPerson?.secondLastName}
                  <img
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noFoto;
                      }}
                      src={objPerson?.photoFingerprint64}
                      alt="Huella"
                      style={{height:'65px', marginLeft:"17%"}}
                    />
                </h5>
                </div>
                <p className="card-text" style={{color:"black"}}>
                  <b>Identiciación:</b> {objPerson?.documentNumber}
                  <br />
                  <b>Fecha de nacimiento:</b>{" "}
                  {getLocalDate(String(objPerson?.dateBirth))}
                  <br />
                  <b>Fecha de matricula:</b>{" "}
                  {getLocalDate(String(objPerson?.dateTuitionStart))}
                  <br />
                  <b>Tipo de curso:</b> {objPerson?.course.typeCourse}
                  <br />
                  
                  <div className="text-center">
                    <img
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noFoto;
                      }}
                      src={objPerson?.photo64}
                      alt="Profile"
                      className="img-thumbnail" style={{height:'250px', marginTop:"2%"}}
                    />
                    </div>
                  <br/>
                </p>
              </div>
              <div className="card-footer text-center">
                <button
                  onClick={() => regresar(-1)}
                  className="btn2 btn-info btn-sm"
                  style={{ marginRight: "2%" }}
                >
                  REGRESAR
                </button>
                <button className="btn2 btn-info btn-sm" onClick={createPdf}>
                  GENERAR PDF
                </button>
                {url && <div>{url}</div>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Carga de Person en proceso</div>
      )}
    </main>
  );
};
