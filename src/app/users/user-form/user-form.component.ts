import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/types';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';

const fields ={
  commonInfo: {
    name: {
      validators: ['required']
    },
    phone: {
      validators: ['required']
    },
    email: {
      validators: ['required', 'email']
    },
  },
  company: {
    name: {
      validators: ['required']
    },
    catchPhrase: {
      validators: []
    },
    bs: []
  },
  address: {
    street: {
      validators: ['required']
    },
    suite: {
      validators: []
    },
    city: {
      validators: ['required']
    },
  }
    
}

interface SaveFormStatus {
  valid: boolean,
  message: string
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: User;
  form: FormGroup;
  saveMessage: SaveFormStatus;

  fieldNameMap = {
    commonInfo: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Phone',
        field: 'phone'
      },
      {
        label: 'Email',
        field: 'email'
      },      
    ],
    company: [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Catch Phrase',
        field: 'catchPhrase'
      },
    ],
    address: [
      {
        label: 'Street',
        field: 'street'
      },
      {
        label: 'Suite',
        field: 'suite'
      },
      {
        label: 'City',
        field: 'city'
      },      
    ],
  }

  get bsFormArray(): FormArray{
    return this.form.get('company').get('bs') as FormArray;
  }

  constructor(
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({});

    Object.keys(fields).forEach( groupKey => {

      this.form.addControl(groupKey, new FormGroup({}));

      const group = this.form.get(groupKey) as FormGroup;

      Object.keys(fields[groupKey]).forEach( fieldKey => {

        if( Array.isArray(fields[groupKey][fieldKey])){
          group.addControl(fieldKey, new FormArray([]));
          return;
        }

        const validators = [];

        if(fields[groupKey][fieldKey].validators && Array.isArray(fields[groupKey][fieldKey].validators)){
          fields[groupKey][fieldKey].validators.forEach( validatorName => {
            switch(validatorName) {
              case 'required':
                validators.push(Validators.required);
                break;
              case 'email':
                validators.push(Validators.email);
                break;
            }
          })
        }

        const control =  new FormControl('', validators);
        group.addControl(fieldKey, control);
      })
    })

    
    console.log(this.form);

    this.router.data
    .subscribe( ({user}) => {
      this.user = user;
      this.form.get('commonInfo').patchValue(this.user);
      this.form.get('company').patchValue({...this.user.company, bs: []});
      this.form.get('address').patchValue(this.user.address);
      
      this.user.company.bs.split(' ').forEach(bsEl => {
        this.bsFormArray.push(new FormControl(bsEl));
      });
    })
  }

  bsListAdd() {
    this.bsFormArray.push(new FormControl(''));
  }

  bsListRemove(index: number) {
    this.bsFormArray.removeAt(index);
  }

  saveChanges() {

    if( this.form.status === "VALID" ) {
      this.user = this.form.getRawValue();
      console.log(this.user);
      this.saveMessage = {
        message: "Changes saved sucessfully",
        valid: true
      };
    }
    else {
      this.saveMessage = {
        message: "Fill all necessary fields",
        valid: false
      };
    }
  }

}
