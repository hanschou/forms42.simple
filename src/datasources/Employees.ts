import { MemoryTable } from "forms42core";
import { DataLoader } from "../DataLoader";

export class Employees extends MemoryTable
{
	public static columns:string[] =
	[
		"employee_id", "first_name", "last_name","email","phone_number",
		"hire_date","job_id","salary","commission_pct","manager_id","department_id"
	];

	constructor()
	{
		super(Employees.columns,DataLoader.employees);
		this.sorting = "last_name, first_name";
	}
}