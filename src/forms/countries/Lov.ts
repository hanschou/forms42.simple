import { Employees } from "../../datasources/Employees";
import { Filter, Filters, ListOfValues, MemoryTable } from "forms42core";

export class Lov
{
   public static get() : ListOfValues
   {
      let employees:MemoryTable = new Employees();
      let filter:Filter = Filters.ILike("last_name");

      let lov:ListOfValues =
      {
         title: "test",
         filter: filter,
         filterPrefix: "%",
         filterPostfix: "%",
         datasource: employees,
         sourcefields: "last_name",
         targetfields: "last_name",
         displayfields: "last_name"
      }

      return(lov);
   }
}