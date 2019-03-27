import React, { Component } from 'react';
import Contact from './Contact';
class Contacts extends Component {
		state = {
			contacts: [
			{
			  id: 1,
			  name: 'John Doe',
			  email: 'jdoe@gmail.com',
			  phone: '555-555-555'
			},
			{
			  id: 2,
			  name: 'Karen Williams',
			  email: 'karen@gmail.com',
			  phone: '222-222-222'
			},
			{
			  id: 3,
			  name: 'Johnson Mike',
			  email: 'j@gmail.com',
			  phone: '111-111-111'
			}
		  ]
		}
	
	render() {
		const {contacts} = this.state;

		return(
			<div>
			   {contacts.map(contact => (
			   	 <Contact
			   	 	key={contact.id}
			   	 	contact={contact}
			   	 	 />
			   	  
			   	))}
			</div>
			)
	}
}

export default Contacts;