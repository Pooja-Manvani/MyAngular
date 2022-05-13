export class patientData {
    id: number
    fullname: string
    age: number
    gender: string
    mobile: number
    image: URL


    constructor(id:number, fullname:string, age:number, gender:string, mobile: number, image: URL)  
    {
        this.id = id
        this.fullname = fullname
        this.age = age
        this.gender = gender
        this.mobile = mobile
        this.image = image
    }
}