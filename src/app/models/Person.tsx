import Course from "./Course";
import Vehicle from "./Vehicle";

class Person {
  public idPerson: string;
  public firstName: string;
  public secondName: string;
  public firstLastName: string;
  public secondLastName: string;
  public phone: string;
  public dateBirth: string;
  public placeBirth:string;
  public address: string;
  public occupation: string;
  public typeDocument: string;
  public documentNumber: string;
  public placeExpedition: string;
  public gender: string;
  public typeBlood: string;
  public statusCivil: string;
  public stratum: string;
  public sisben: string;
  public levelEducation: string;
  public certificate: string;
  public stateTuition: string;
  public dateTuitionStart: string;
  public dateTuitionEnd: string;
  public email: string;
  public balance: number;
  public referenceFamily: string;
  public addresReference: string;
  public photo64: string;
  public photoFingerprint: string;
  public photoFingerprint64: string;
  public vehicle: Vehicle;
  public course: Course;

  constructor(
    id:string,
    firstName: string,
    secondName: string,
    firstLastName: string,
    secondLastName: string,
    phone: string,
    dateBirth: string,
    placeBirth:string,
    address: string,
    occupation: string,
    typeDocument: string,
    documentNumber: string,
    placeExpedition: string,
    gender: string,
    typeBlood: string,
    statusCivil: string,
    stratum: string,
    sisben: string,
    levelEducation: string,
    certificate: string,
    stateTuition: string,
    dateTuitionStart: string,
    dateTuitionEnd: string,
    email: string,
    balance: number,
    referenceFamily:string,
    addresReference:string,
    photo64: string,
    photoFingerprint: string,
    photoFingerprint64: string,
    idVechicle: Vehicle,
    idCourse: Course,
    
  ) {
    this.idPerson=id;
    this.firstName = firstName;
    this.secondName = secondName;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.phone = phone;
    this.dateBirth = dateBirth;
    this.placeBirth=placeBirth;
    this.address = address;
    this.occupation = occupation;
    this.typeDocument = typeDocument;
    this.documentNumber = documentNumber;
    this.placeExpedition = placeExpedition;
    this.gender = gender;
    this.typeBlood = typeBlood;
    this.statusCivil = statusCivil;
    this.stratum = stratum;
    this.sisben = sisben;
    this.levelEducation = levelEducation;
    this.certificate = certificate;
    this.stateTuition = stateTuition;
    this.dateTuitionStart=dateTuitionStart;
    this.dateTuitionEnd=dateTuitionEnd;
    this.email = email;
    this.balance=balance;
    this.referenceFamily=referenceFamily;
    this.addresReference=addresReference;
    this.photo64 = photo64;
    this.photoFingerprint = photoFingerprint;
    this.photoFingerprint64 = photoFingerprint64;
    this.vehicle = idVechicle;
    this.course = idCourse;
  }
}
export default Person;
