import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit {
  @Output() trainingCreated = new EventEmitter<{ name: string }>();


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  newTraining(trainingForm: NgForm) {
    let newTraining = 
    {name: trainingForm.value.name,
      employeeid: trainingForm.value.employeeid,
      company:trainingForm.value.company,
      training: trainingForm.value.class,
      date: trainingForm.value.date,
      expDate: trainingForm.value.expDate,
      instructor: trainingForm.value.instructor
    }

    this.userService.addTraining(newTraining).subscribe(
      (res) => {
        if (res == "Incorrect Email or Password") {
          alert(res+". If problem persists, please contact CTS.")
        }
        this.trainingCreated.emit({ name: newTraining.name });
        trainingForm.controls['name'].reset()
        trainingForm.controls['employeeid'].reset()

      },
      (err) => {
        console.log('ERR', err)
      }
    )
  }

}
