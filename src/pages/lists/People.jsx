import { h } from 'preact';

import { App, List } from '../../components';

export default props => {

	const { documentTitle, pageTitle, people } = props;

	return (
		<App documentTitle={documentTitle} pageTitle={pageTitle}>

			<List instances={people} />

		</App>
	);

};
