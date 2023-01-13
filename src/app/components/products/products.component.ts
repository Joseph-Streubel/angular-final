import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Tools } from 'src/app/models/tools';
import { ToolServiceService } from 'src/app/services/tool-service.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  toolList: Tools[] = [];
  httpClient: any;

  constructor(private toolService: ToolServiceService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.toolService.getAllTools().subscribe(foundTools => {
      console.log(foundTools);
      this.toolList = foundTools;
    })
  }

  onDelete(id: number) {
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

  toolSearch(){
    this.toolService.searchTools("").subscribe(foundTools => {
      console.log(foundTools);
      this.toolList = foundTools;
      this.router.navigateByUrl("/search")
      })
  }

  toolSortName () {
    this.toolService.sortByName().subscribe(nameTools => {
      this.toolList = nameTools;
    })
  }

  toolSortPrice(){
    this.toolService.sortByPrice().subscribe(priceTools => {
      this.toolList = priceTools;
    })
  }

  toolSortPriceDesc(){
    this.toolService.sortByPriceDesc().subscribe(descPrice => {
      this.toolList = descPrice;
    })
  }

}

