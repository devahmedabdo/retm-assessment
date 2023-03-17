import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-token-checker',
  templateUrl: './token-checker.component.html',
  styleUrls: ['./token-checker.component.scss'],
})
export class TokenCheckerComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService) {}
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
