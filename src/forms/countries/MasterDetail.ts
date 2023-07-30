import { Employees } from "../../datasources/Employees";
import { Departments } from "../../datasources/Departments";
import { Block, EventType, Form, Key, datasource, formevent } from "forms42core";
import { Lov } from "./Lov";


@datasource("employees",Employees)
@datasource("departments",Departments)

export class MasterDetail extends Form
{
	constructor(page:HTMLElement)
	{
		super(page);

		let detail:Key = new Key("employees","department_id");
		let master:Key = new Key("departments","department_id");

		this.link(master,detail);
		this.setListOfValues(Lov.get(),"employees","last_name");
	}

	public async sort(block:string, column:string) : Promise<boolean>
	{
		this.message("Sort the mother fucker")
		let blk:Block = this.getBlock(block);

		if (!blk.empty)
		{
			blk.datasource.sorting = column;
			await blk.reQuery();
		}
		
		return(true);
	}
}