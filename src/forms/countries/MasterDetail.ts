import { Block, Form, Key, datasource } from "forms42core";
import { Departments } from "../../datasources/Departments";
import { Employees } from "../../datasources/Employees";

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
	}

	public async sort(block:string, column:string) : Promise<boolean>
	{
		if (block.toLowerCase() == "emp")
		{
			let block:Block = this.getBlock("employees");
			block.datasource.sorting = column;
			await block.reQuery();
			return(true);
		}

		if (block.toLowerCase() == "dept")
		{
			let block:Block = this.getBlock("departments");
			block.datasource.sorting = column;
			await block.reQuery();
			return(true);
		}
	}
}