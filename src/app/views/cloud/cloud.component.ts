import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faCheck,
  faEye,
  faEyeSlash,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss'],
})
export class CloudComponent implements OnInit {
  arrow = faArrowLeft;
  emailIcon = faEnvelope;
  check = faCheck;
  lock = faLock;
  eay = faEye;
  eayslash = faEyeSlash;
  year: number = new Date().getFullYear();
  steps: any[] = [
    {
      number: 1,
      title: 'شروط الإستخدام',
      des: 'الموافقة على الشروط والأحكام',
    },
    {
      number: 2,
      title: 'حجز رمز الخدمة',
      des: 'أنشئ رمز الخدمة الخاص بك',
    },
    {
      number: 3,
      title: 'صفحة التسجيل',
      des: 'انشئ بيانات الدخول لمدير النظام',
    },
    {
      number: 4,
      title: 'الموجز الكامل',
      des: 'تأكد من بياناتك واحجز',
    },
  ];

  formStep: number = 1;
  cloudForm = this.fb.group({
    agreement: ['', [Validators.required, Validators.requiredTrue]],
    serviceCode: ['', [Validators.required, Validators.pattern('[a-z]+')]],
    userName: ['', [Validators.required, Validators.pattern('[a-zِA-z]+')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: ['', [Validators.required]],
  });
  incrementStep() {
    this.formStep += 1;
  }
  decrementStep() {
    if (this.formStep == 1) {
      return;
    }
    this.formStep -= 1;
  }
  avilableCode: boolean = true;
  startApi: boolean = false;
  checkForServicesCode(code: string) {
    this.startApi = true;

    this.api.checkCode(code).subscribe({
      next: (res: any) => {
        this.avilableCode = res.avilable;
        this.startApi = false;
      },
      error: (err: any) => {
        this.startApi = false;
        console.log(err);
      },
    });
  }
  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {}
}
