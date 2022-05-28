import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  private current_module: number;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.current_module = -1;
    this.routeSub = new Subscription;
  }

  // fix : faire passer le module dans le composant et non pas l'id du cours
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.current_module = params['id']; // store the value of the current module id
    });
  }

  goToModule() {
    this.router.navigateByUrl('/module/' + this.current_module);
  }

}
