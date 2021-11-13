import { Fragment, h } from 'preact'; // eslint-disable-line no-unused-vars

import { InstanceLink, PrependedMembers } from '.';

const ProducerEntities = props => {

	const { entities } = props;

	return (
		<Fragment>

			{
				entities
					.map((entity, index) =>
						<Fragment key={index}>

							{
								entity.members?.length > 0 && (
									<PrependedMembers members={entity.members} />
								)
							}

							{
								entity.uuid
									? <InstanceLink instance={entity} />
									: entity.name
							}

						</Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</Fragment>
	);

};

export default ProducerEntities;
