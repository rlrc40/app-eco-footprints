import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { EcoActionService } from '../service/EcoAction.service';
import { EcoFootprintService } from '../service/EcoFootprint.service';
import { SnackBarService } from '../service/SnackBar.service';
import { ImageService } from '../service/Image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-eco-footprint-form',
  templateUrl: './eco-footprint-form.component.html',
  styleUrls: ['./eco-footprint-form.component.scss']
})
export class EcoFootprintFormComponent implements OnInit {
  @ViewChild('stepper') stepper;
  firstFormGroup: FormGroup;
  ecoActionsGroup: FormGroup;
  selectedFile: ImageSnippet;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private ecoActionService: EcoActionService,
    private ecoFootprintService: EcoFootprintService,
    private imageService: ImageService,
    private snackBarService: SnackBarService,
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.maxLength(300),
      ]),
      image: new FormControl(null)
    });

    this.ecoActionsGroup = this._formBuilder.group({
      ecoActions: new FormArray([], [this.validateEcoActions])
    });

    this.ecoActionService.getEcoActionsField().subscribe( data => {
      this.ecoActions.clear();
      for(const ecoAction of data) {
        this.ecoActions.push(new FormControl(ecoAction, Validators.required));
      }
    });
  }

  validateEcoActions(arr: FormArray): Boolean {
    return arr.value.length > 0;
  }

  submit(){
      this.isLoading = true;
      const newEcoFootprint = {
        ...this.firstFormGroup.value,
        ...this.ecoActionsGroup.value,
      };
      const submitEcoFootprint = () => {
        this.ecoFootprintService.save(newEcoFootprint).subscribe(result => {
          this.isLoading = false;
          this.router.navigate(['/list', { }]);
          this.snackBarService.openSnackBar('Eco footprint create', 'Success');
        });
      }
      if (this.validateEcoActions(this.ecoActions)) {
        if (this.selectedFile && this.selectedFile.file)
          this.imageService.uploadImage(this.selectedFile.file).subscribe(
            photoId => {
              newEcoFootprint.photo = photoId;
              submitEcoFootprint();
            },
            (err) => {
              console.log(err);
              this.snackBarService.openSnackBar('Eco footprint create', 'Error');
          })
          else submitEcoFootprint();
        }
  }

  processFile(imageInput: any) {
    if (!imageInput) return;
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  onNextSecondStep() {
    if (this.validateEcoActions(this.ecoActions)) {
      this.stepper.next();
    }
  }

  requiredFileType( ) {
    const file = this.firstFormGroup.get('image');
    if ( file ) {
      // const extension = file.name.split('.')[1].toLowerCase();
      // if ( type.toLowerCase() !== extension.toLowerCase() ) {
      //   return {
      //     requiredFileType: true
      //   };
      // }

      return null;
    }
  }

  get ecoActions() {
    return this.ecoActionsGroup.get('ecoActions') as FormArray
  }
  get ecoActionsErrorMessage() {
    const ecoActions = this.ecoActionsGroup.get('ecoActions');
    if (ecoActions.invalid || !this.validateEcoActions(this.ecoActions)) {
      return 'Eco Actions is required.';
    }
    return false;
  }

  get firstName() { return this.firstFormGroup.get('firstName') }
  get firstNameErrorMessage() {
    const firstName = this.firstFormGroup.get('firstName');
    if (firstName.invalid && (firstName.dirty || firstName.touched)) {
      if (firstName.errors.required) return 'Firstname is required.';
      if (firstName.errors.minlength) return 'Firstname must be at least 4 characters long';
    }
    return false;
  }

  get lastName() { return this.firstFormGroup.get('lastName') }
  get lastNameErrorMessage() {
    const lastName = this.firstFormGroup.get('lastName');
    if (lastName.invalid && (lastName.dirty || lastName.touched)) {
      if (lastName.errors.required) return 'Lastname is required.';
      if (lastName.errors.minlength) return 'Lastname must be at least 4 characters long';
    }
    return false;
  }

  get description() { return this.firstFormGroup.get('description') }
  get descriptionErrorMessage() {
    const description = this.firstFormGroup.get('description');
    if (description.invalid && (description.dirty || description.touched)) {
      if (description.errors.maxlength) return 'Description must be as much 300 characters long';
    }
    return false;
  }


}
