import React, { Component } from 'react';

export class ContactsListRow extends Component {

	render () {
		const {firstRow} = this.props;
		return (
			<React.Fragment>
				<td>{this.props.firstName}</td>
					<td></td>
					<td></td>
					<td></td>
			</React.Fragment>
		)
	}
}

export default ContactsListRow;