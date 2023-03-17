import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  data!: any;
  arrow = faArrowLeft;
  emailIcon = faEnvelope;
  year: number = new Date().getFullYear();
  token: any = this.route.snapshot.params['token'];
  checkToken(token: any) {
    this.api.checkToken(token).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
    });
  }
  ngOnInit(): void {
    this.checkToken(this.token);
  }
}
