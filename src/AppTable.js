import './AppTable.less';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@bluecateng/pelagos';

const columns = [];
const data = [];
const sort = {};

for (let i = 0; i < 10; ++i) {
	columns.push({id: `c${i}`, header: `Column ${i}`});
}

for (let i = 0; i < 1000; ++i) {
	const row = {id: `r${i}`};
	data.push(row);
	for (let j = 0; j < 10; ++j) {
		row[`c${j}`] = `Row ${i}, Column ${j}`;
	}
}

const AppTable = () => (
	<div className="AppTable">
		<Table className="AppTable__table">
			<TableHead>
				<TableRow>
					{columns.map(({id, header, align, sortable}) => (
						<TableHeader key={id} align={align} sortable={sortable} sortOrder={id === sort.id ? sort.order : null}>
							{header}
						</TableHeader>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((row) => (
					<TableRow key={row.id}>
						{columns.map(({id, align}) => (
							<TableCell key={id} align={align}>
								{row[id]}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	</div>
);

export default AppTable;
