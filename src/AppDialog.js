import {Dialog, ButtonMenu, MenuItem, Button} from '@bluecateng/pelagos';
import './AppDialog.less';

const AppDialog = () => (
	<Dialog title="Test dialog" stretch>
		<span>
			<ButtonMenu text="Click to expand">
				<MenuItem key="option1" text="Option 1" />
				<MenuItem key="option2" text="Option 2" />
				<MenuItem key="option3" text="Option 3" />
			</ButtonMenu>
		</span>
		<div>
			<Button>Close</Button>
		</div>
	</Dialog>
);

export default AppDialog;
