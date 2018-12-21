import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() userData:any = { nombre: '', apellido: '', email: '', password: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getUser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.userData = data;
    });
  }

  updateUser() {
    this.rest.updateUser(this.route.snapshot.params['id'], this.userData).subscribe((result) => {
      this.router.navigate(['/user-details/'+this.route.snapshot.params['id']]);
    }, (err) => {
      console.log(err);
    });
  }

}