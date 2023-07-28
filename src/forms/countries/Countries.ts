import { EventType, Form, FormEvent, formevent } from "forms42core";

export class Countries extends Form
{
   @formevent()
   public async test(event:FormEvent) : Promise<boolean>
   {
      console.log(EventType[event.type]);
      return(true);
   }
}