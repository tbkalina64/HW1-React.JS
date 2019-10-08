import React, { Component } from 'react';
import TableFirstName from './TableFirstName';

export class TdList extends Component {
	render() {
		const { trFirstRow } = this.props;
		return (
			<React.Fragment>
				
				{trFirstRow.map ( firstRow => (
					<TableFirstName 
						key={firstRow.id}
					firstRow = {firstRow} />
					))
				}
					<td></td>
					<td></td>
					<td></td>
			</React.Fragment>
		)
	}
}
export default TdList