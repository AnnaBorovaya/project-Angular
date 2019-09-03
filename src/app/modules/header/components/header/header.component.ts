import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiseService } from '../../services/servise.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() authUserId: string;
  public search = '';
  public searchResult = null

  public emptyUserAcrive = false;
  constructor(
    
    private router: Router,
    public headerModalService: ServiseService,

  ) { }
  ngOnInit() {
  }
  handlerLogOut(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
  searchHundler() {
    if (this.search === '') return;
    this.headerModalService.getSearchUser(this.search).subscribe((data) => {
      this.searchResult = data;
      if (!this.searchResult.length) {
        this.emptyUserAcrive = true;
      }
    });
  }
}
