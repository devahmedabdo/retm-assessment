import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-token-checker',
  templateUrl: './token-checker.component.html',
  styleUrls: ['./token-checker.component.scss'],
})
export class TokenCheckerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}
  token: any = this.route.snapshot.params['token'];
  checkToken(token: any) {
    this.api.checkToken(token).subscribe({
      next: (data: any) => {
        if (!data?.data) {
          this.router.navigateByUrl('/error');
        } else {
          this.router.navigateByUrl('/success');
        }
      },
      error: (err) => console.log(err),
    });
  }
  ngOnInit(): void {
    this.checkToken(this.token);
  }
}
