import { MemoryTable } from "forms42core";
import { DataLoader } from "../DataLoader";

export class Departments extends MemoryTable
{
	private static columns:string[] =
	[
		"department_id",
		"department_name"
	];

	constructor()
	{
		super(Departments.columns,DataLoader.departments);
		this.sorting = "department_id";
	}
}