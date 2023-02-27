import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        body: ['', Validators.required]
      });
  }


  ngOnInit(): void {
    console.log(this.data)

    this.form.patchValue({
      title: this.data.title,
      body: this.data.body
    });
  }

  onSubmit() {
    var formData: any = new FormData();
    formData.append('title', this.form.get('title')!.value);
    formData.append('body', this.form.get('body')!.value);
    debugger
    console.log(formData)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
