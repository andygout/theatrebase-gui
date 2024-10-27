import { App } from '../components/index.js';

const ErrorPage = props => {

	const { documentTitle, pageTitle } = props;

	return (
		<App documentTitle={documentTitle} pageTitle={pageTitle}>

			<div>This is the error page</div>

		</App>
	);

};

export default ErrorPage;
