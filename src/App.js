import {useState} from 'react';
import Hello from './Hello';
import AppMulti from './AppMulti';
import AppTable from './AppTable';

const App = () => {
	const [content, setContent] = useState('');
	window.addEventListener('hashchange', () => setContent(location.hash.slice(1)));
	switch (content) {
		case '':
			return <Hello />;
		case 'multi':
			return <AppMulti />;
		case 'table':
			return <AppTable />;
		default:
			return 'Not found';
	}
};

export default App;
