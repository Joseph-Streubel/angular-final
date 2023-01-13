import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tools } from 'src/app/models/tools';
import { ToolServiceService } from 'src/app/services/tool-service.service';

@Component({
  selector: 'app-tool-details',
  templateUrl: './tool-details.component.html',
  styleUrls: ['./tool-details.component.css']
})
export class ToolDetailsComponent {
  id: number = 0;
  currentTool: Tools = new Tools ()
  toolList: Tools[] = [];
  

  constructor ( private toolService: ToolServiceService, private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.toolService.getToolByID(this.id).subscribe(foundTool => {
        console.log(foundTool);
        this.currentTool = foundTool;
    });
  }

  onDelete(id: number){
    this.toolService.deleteToolByID(id).subscribe(response => {
        console.log(response);
        this.loadTools();
    });
  }

  loadTools() {
    this.toolService.getAllTools().subscribe(foundTools => {
        console.log(foundTools);
        this.toolList = foundTools;
        this.router.navigateByUrl("/");
    });
    }

}
