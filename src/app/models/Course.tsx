class Course{
    public idCourse: string;
    public typeCourse:string;
    public price: number ;
    
    constructor(id:string,typeCourse:string,price:number){
        this.idCourse=id;
        this.typeCourse=typeCourse;
        this.price=price;
    }
}
export default Course;