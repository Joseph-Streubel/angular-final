import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tools } from 'src/app/models/tools';
import { ToolServiceService } from 'src/app/services/tool-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  toolList: Tools[] = [];

  constructor(private toolService: ToolServiceService, private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe(foundTools => {
      console.log(foundTools);
      this.toolList = foundTools;
    })
  }


}
