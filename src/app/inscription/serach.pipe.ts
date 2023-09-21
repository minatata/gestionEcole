import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if(!items) return null;
    if(!searchText) return items;
    searchText=searchText.toLowerCase();
    return items.filter((item:any)=>{
      const propertyValue = item.property.toLowerCase(); // Exemple : item.nom.toLowerCase()
      return propertyValue.includes(searchText);
    });
  }

}
