import { DataLoader } from './DataLoader';
import { MasterDetail } from './forms/countries/MasterDetail';
import { FormsModule as FormsCoreModule, FormsPathMapping } from 'forms42core';

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
      this.parse(document.body);
   }
}