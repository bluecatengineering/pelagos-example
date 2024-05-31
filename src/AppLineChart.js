import {useState} from 'react';
import {LineChart} from '@bluecateng/pelagos-charts';

import './AppLineChart.less';

const data = [
	{group: 'Alpha', key: 'a', value: 5e3},
	{group: 'Alpha', key: 'b', value: 12e3},
	{group: 'Alpha', key: 'c', value: 8e3},
	{group: 'Alpha', key: 'd', value: 17e3},
	{group: 'Beta', key: 'a', value: null},
	{group: 'Beta', key: 'b', value: 9e3},
	{group: 'Beta', key: 'c', value: 13e3},
	{group: 'Beta', key: 'd', value: 1e3},
	{group: 'Gamma', key: 'a', value: 3e3},
	{group: 'Gamma', key: 'b', value: null},
	{group: 'Gamma', key: 'c', value: 12e3},
	{group: 'Gamma', key: 'd', value: 6e3},
];

const AppLineChart = () => {
	const [selected, setSelected] = useState([]);
	return (
		<LineChart
			className="AppLineChart"
			data={data}
			dataOptions={{selectedGroups: selected}}
			onSelectionChange={setSelected}
		/>
	);
};

export default AppLineChart;
