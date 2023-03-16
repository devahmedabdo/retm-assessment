import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss'],
})
export class CloudComponent implements OnInit {
  arrow = faArrowLeft;
  emailIcon = faEnvelope;
  check = faCheck;
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
  year: number = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
