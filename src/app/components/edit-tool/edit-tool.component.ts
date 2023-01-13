import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tools } from 'src/app/models/tools';
import { ToolServiceService } from 'src/app/services/tool-service.service';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.css']
})
export class EditToolComponent {
  id: number = 0;
  currentTool: Tools = new Tools()

  constructor (private toolService: ToolServiceService, private actRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.toolService.getToolByID(this.id).subscribe(foundTool => {
        console.log(foundTool);
        this.currentTool = foundTool;
    });
  }

  onSubmit(){
    this.toolService.editToolByID(this.id, this.currentTool).subscribe(edittedTool => {
      console.log(edittedTool);
      this.router.navigateByUrl("/products");
    })
  }

}
