import React, { Component } from 'react';
import ContactsListRow from './ContactsListRow';

export class ContactsList extends Component {
	render() {
		const {trFirstRow} = this.props;
		return (
			<React.Fragment>
				    <ContactsListRow />
			</React.Fragment>
		)
	}
}
export default ContactsList
