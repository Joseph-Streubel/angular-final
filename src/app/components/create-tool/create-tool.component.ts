import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tools } from 'src/app/models/tools';
import { ToolServiceService } from 'src/app/services/tool-service.service';

@Component({
  selector: 'app-create-tool',
  templateUrl: './create-tool.component.html',
  styleUrls: ['./create-tool.component.css']
})
export class CreateToolComponent {
    newTool: Tools = new Tools();

    constructor (private toolService: ToolServiceService, private router: Router) {}

    ngOnInit(): void {
    }

    onSubmit() {
      this.toolService.createNewTool(this.newTool).subscribe(response => {
          console.log(response);
          this.router.navigateByUrl("/products")
      });
  }

}
