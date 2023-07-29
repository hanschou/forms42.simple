import { Connection, dates } from "forms42core";

export class DataLoader
{
   public static employees:any = null;
   public static departments:any = null;

   public static async load() : Promise<void>
   {
      let conn:Connection = new Connection();

		DataLoader.loadEmpData(conn);
		DataLoader.loadDeptData(conn);
   }

   private static async loadDeptData(conn:Connection) : Promise<void>
   {
      let response:any = await conn.get("/data/Departments.json");
		DataLoader.departments = response.table;
   }

   private static async loadEmpData(conn:Connection) : Promise<void>
   {
      let response:any = await conn.get("/data/Employees.json");

		for (let i = 0; i < response.table.length; i++)
			response.table[i][5] = dates.parse(response.table[i][5],"YYYY-MM-DD");

		DataLoader.employees = response.table;
   }
}