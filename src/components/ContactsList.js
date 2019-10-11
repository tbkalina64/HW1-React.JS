import React, { Component } from 'react';
import ContactsListRow from './ContactsListRow';

export class ContactsList extends Component {
	render() {
		const {trFirstContactRow} = this.props;
		return (
			<React.Fragment>
				    {trFirstContactRow.map (cols => (
					    	<tr key={cols.id}>
					    		<ContactsListRow cols={ cols } />
					    	</tr>
				    	)) 
				    }
			</React.Fragment>
		)
	}
}
export default ContactsList
