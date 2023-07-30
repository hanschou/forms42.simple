import { Employees } from "../../datasources/Employees";
import { Departments } from "../../datasources/Departments";
import { Block, Form, Key, datasource } from "forms42core";


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
		let blk:Block = this.getBlock(block);
		blk.datasource.sorting = column;
		await blk.reQuery();
		return(true);
	}
}