import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  registerationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.initializeFormGroup()
  }
  initializeFormGroup(): void {//method
    this.registerationForm = this.formBuilder.group({
      name: this.nameFormGroup(),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: this.addresFormGroup(),
      skills: this.skillsFormArray(),
      refrence: new FormArray([new FormControl('')])
    })
  }
  skillsFormArray(): FormArray {
    return new FormArray([
      this.createSkills()
    ])
  }

  createSkills(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      level: new FormControl(''),

    })
  }
  addresFormGroup(): FormGroup {
    return new FormGroup({
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    })
  }
  nameFormGroup(): FormGroup {
    return new FormGroup({
      first: new FormControl('', [Validators.required,Validators.minLength(6)]),
      maddile: new FormControl('', [Validators.required]),
      last: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.initializeFormGroup()
  }
  onFormSubmitted() {
    console.log(this.registerationForm.value)
  }

  get getSkills(): FormArray {
    return this.registerationForm.get('skills') as FormArray
  }
  addSkills() {
    this.getSkills.push(this.createSkills())
  }
  printValuSkiils() {
    console.log(this.getSkills.value)
  }


  get f() { return this.registerationForm.controls; }

}
