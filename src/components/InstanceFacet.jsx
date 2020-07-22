import { h } from 'preact'; // eslint-disable-line no-unused-vars

const InstanceFacet = props => {

	const { labelText, children } = props;

	return (
		<div className="instance-facet-wrapper">

			<div className="instance-facet-label">
				{ labelText }
			</div>

			<div className="instance-facet">
				{ children }
			</div>

		</div>
	);

};

export default InstanceFacet;
