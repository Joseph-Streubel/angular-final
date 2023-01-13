import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tools } from 'src/app/models/tools';
import { ToolServiceService } from 'src/app/services/tool-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  toolList: Tools[] = [];
  httpClient: any;

  constructor(private toolService: ToolServiceService, private actRoute: ActivatedRoute, private router: Router) { }
}
