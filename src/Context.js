import React, { Component } from 'react';

const Context = React.createContext()

const reducer = (state, action) => {
	switch(action.type) {
		case 'DELETE_CONTACT':
		  return {
		  	...state,
		  	contacts: state.contacts.filter(contact => contact.id !== action.payload)
		  }
	}
}
export class Provider extends Component {
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
		  ],
		  dispatch: action => this.setState(state => reducer(state, action))
	}

	render() {
		return(
			<Context.Provider value={this.state}>
			  {this.props.children}
			</Context.Provider>
			)
	}
}

export const Consumer = Context.Consumer;