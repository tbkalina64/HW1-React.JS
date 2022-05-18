import React, { Component } from 'react';
import ContactsListRow from './ContactsListRow';

export class ContactsList extends Component {
	render() {
		const { contactListItem } = this.props;
		return (
			<React.Fragment>
				<table>
					<caption>ContactsList</caption>
					<thead>
						<tr>
							<th>Name</th>
							<th>Sername</th>
							<th>Age</th>
							<th>Telephone</th>
						</tr>
					</thead>
					<tbody>
						{contactListItem.map(cols => (
								<ContactsListRow key={cols.id} cols={cols} />
						))
						}
					</tbody>
				</table>



			</React.Fragment>
		)
	}
}
export default ContactsList