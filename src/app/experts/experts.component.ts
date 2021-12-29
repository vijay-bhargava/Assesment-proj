import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service'

@Component({
  selector: 'yuj-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {
  dirList: any = [];
  filteredDirList: any = [];
  searchText: string = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllDirectories();
  }

  getAllDirectories(){


    this.apiService.getAllDirectories().subscribe(res=>{
      debugger;
    this.dirList = res;
    this.filteredDirList = this.dirList;
})


}
    searchItem(event: KeyboardEvent){
  
      this.filterDirList();
      
      }
      
      filterDirList(){
      
      if(this.searchText == ''){
      
      this.filteredDirList = this.dirList;
      }else{
      
     // this.filteredDirList = this.dirList.filter(x => x.name.toLowerCase().startsWith(this.searchText));
      
      }
      
      }

}

  
  

  
 
