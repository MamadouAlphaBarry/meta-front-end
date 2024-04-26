import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, occurence1:string,occurence2:string): any {
    if(occurence1==="" && occurence2==="") {
      return value;
    }else if(occurence1=="" && occurence2!==""){
      return 
    }else if(occurence1!=="" && occurence2===""){
      return
    }else{
    return null;}
  }

}
