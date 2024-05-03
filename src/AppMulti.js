import {useState} from 'react';
import {Button, MultiColumn} from '@bluecateng/pelagos';

import './AppMulti.less';

const {random} = Math;

const getItemCount = () => new Promise((resolve) => setTimeout(() => resolve(26), 250 + 500 * random()));
// const getItemCount = () => 26;

const isLeaf = (path) => path.length >= 5;

const renderItem = (path) => String.fromCharCode(...path.map((i) => 97 + i));

const AppMulti = () => {
	const [path, setPath] = useState([0]);
	return (
		<div className="AppMulti">
			<h1>Multi-column example</h1>
			<Button text="First" />
			<h2 id="label">Letters</h2>
			<MultiColumn
				aria-labelledby="label"
				className="AppMulti__multi"
				path={path}
				colWidth="16em"
				emptyText="No letters available"
				getItemCount={getItemCount}
				isLeaf={isLeaf}
				renderItem={renderItem}
				onChange={setPath}
			/>
			<Button text="Last" />
		</div>
	);
};

export default AppMulti;
