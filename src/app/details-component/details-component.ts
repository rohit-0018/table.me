import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-details-component',
  imports: [],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css'
})
export class DetailsComponent {
  item: any;

  constructor(private route: ActivatedRoute, private tableService: SharedDataService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.item = this.tableService.getById(id);
  }
}
