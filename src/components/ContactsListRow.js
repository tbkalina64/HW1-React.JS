import React, { Component } from 'react';

export class ContactsListRow extends Component {

	render() {
		const { cols } = this.props;
		return (
			<React.Fragment>
				<tr>
					<td>{cols.firstName} </td>
					<td>{cols.lastName} </td>
					<td>{cols.age} </td>
					<td>{cols.phone} </td>
				</tr>
			</React.Fragment>
		)
	}
}

export default ContactsListRow;