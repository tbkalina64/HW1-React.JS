import React, { Component } from 'react';
import ContactsList from './components/ContactsList'


class App extends Component {
	state = {
		firstRow: [
			{
				id: 1,
				firstName: 'Alex',
				lastName: 'Smith',
				age: 24,
				phone: '0987654321'
			}
			
		]
	}

    render() {
        return (
            <div className="container">
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
		      	<tr>
		      		<ContactsList trFirstRow={this.state.firstRow} />
		      	</tr>	
		  		</tbody>
		      </table>
      		</div>
        )
    }
}

export default App;