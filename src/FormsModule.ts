import { DataLoader } from './DataLoader';
import { MasterDetail } from './forms/countries/MasterDetail';
import { Form, FormsModule as FormsCoreModule, FormsPathMapping } from 'forms42core';

@FormsPathMapping(
[
   {class: MasterDetail, path: "/forms/masterdetail"}
]
)

export class FormsModule extends FormsCoreModule
{
   constructor()
   {
      super();
      this.setup();
   }

   private async setup()
   {
      await DataLoader.load();

      let parse:boolean = true;

      if (parse)
      {
         this.parse(document.body);
      }
      else
      {
         let view:HTMLElement = document.querySelector('form');
         let form:Form = await this.createform(MasterDetail,view);
         form.attach(document.body);
      }
   }
}