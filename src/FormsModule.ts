import { Countries } from './forms/countries/Countries';
import { FormsModule as FormsCoreModule, DatabaseConnection as Connection, FormsPathMapping, FormEvent, EventType } from 'forms42core';

@FormsPathMapping(
[
   {class: Countries, path: "/forms/countries"}
]
)

export class FormsModule extends FormsCoreModule
{
   constructor()
   {
      super();
      this.parse();
   }

   public async test(event:FormEvent) : Promise<boolean>
   {
      console.log(EventType[event.type]+" "+event.block+"."+event.field);
      return(true);
   }
}