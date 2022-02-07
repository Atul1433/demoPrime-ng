import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { OilCompanies } from '../OilCompanies';
import { PackingslipService } from '../packingslip.service';

@Component({
  selector: 'app-oilcompany',
  templateUrl: './oilcompany.component.html',
  styleUrls: ['./oilcompany.component.scss']
})
export class OilcompanyComponent implements OnInit {

  datasource: OilCompanies[]=[];

  customers: OilCompanies[]=[];

  products: OilCompanies[]=[];
  cols: any[]=[];
  loading: boolean=false;
  totalRecords: number=0;

  constructor(private companyService: PackingslipService,primengConfig: PrimeNGConfig) { }

  
  loadCustomers(event: LazyLoadEvent) {  
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.customers = this.datasource.slice();//(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
}
  ngOnInit(): void {

    this.companyService.getAllOilCompanies().subscribe(data => {
      this.datasource = data;
      this.totalRecords = data.length;
  });

  this.loading = true;
  //this.primengConfig.ripple = true;

    this.companyService.getAllOilCompanies().subscribe(data => this.products = data);

    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'name', header: 'Name' },
        { field: 'isActive', header: 'Active' },
        { field: 'dateCreated', header: 'Created Date' },
        { field: 'createdBy', header: 'Created By' },
        { field: 'dateModified', header: 'Modify Date' },
        { field: 'modifiedBy', header: 'Modified By' }

    ];
  }

}
