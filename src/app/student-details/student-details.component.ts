import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent  implements OnInit{


Studentdetail:any[]=[]
student={
  StudentId:0,
  StudentName:"",
  StudentEmail:"",
  StudentDepartment:"",
  StudentPhone:""
}

ngOnInit(): void {
  const localdata=localStorage.getItem('studentlist')
  if(localdata != null){
    this.Studentdetail = JSON.parse(localdata)
  }
}


onsubmitdata(Item:any){
  this.student.StudentId = this.Studentdetail.length+1
  this.Studentdetail.push(this.student)
  localStorage.setItem('studentlist',JSON.stringify(this.Studentdetail))
  this.student={
    StudentId:0,
    StudentName:"",
    StudentEmail:"",
    StudentDepartment:"",
    StudentPhone:""
  }
}

onUpdateButton(stud:any){
  this.student=stud
}

onUpdatedata(){
   const record=this.Studentdetail.find(m=>m.StudentId ==this.student.StudentId)
   record.StudentName=this.student.StudentName;
   record.StudentEmail=this.student.StudentEmail;
   record.StudentDepartment=this.student.StudentDepartment;
   record.StudentPhone=this.student.StudentPhone;
   localStorage.setItem('studentlist',JSON.stringify(this.Studentdetail));
   this.student={
    StudentId:0,
    StudentName:"",
    StudentEmail:"",
    StudentDepartment:"",
    StudentPhone:""
    
  }  
}


onDelete(id:any){
  for(let i=0; i<this.Studentdetail.length; i++){
    if(this.Studentdetail[i].StudentId == id){
      this.Studentdetail.splice(i,1)
    }
  }
  localStorage.setItem('studentlist',JSON.stringify(this.Studentdetail));
}



onclose()
{
  this.student={
    StudentId:0,
    StudentName:"",
    StudentEmail:"",
    StudentDepartment:"",
    StudentPhone:""
}
}
}


