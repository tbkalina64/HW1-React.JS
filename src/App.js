import React, { Component } from 'react';
import TdList from './components/TdList'


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
		      	<caption>ContactList</caption>
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
		      		<TdList trFirstRow={this.state.firstRow} />
		      	</tr>
		  			
		  		</tbody>
		      </table>
      		</div>
        )
    }
}

export default App;