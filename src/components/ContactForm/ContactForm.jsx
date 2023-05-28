import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled'


export class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			number: ''
		}
	}

	handleInputContact = (event) => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const newContacts = { id: nanoid(),
				name: name.value,
				number: number.value};
		this.props.changeContacts(newContacts);
		this.setState({
			name: '',
			number: ''
		});
  }

	render() {
		const { name, number } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<label>Name
					<input
						type="text"
						name="name"
						value={name}
						onChange={this.handleInputContact}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
			</label>
			<label>Number
					<input
							type="tel"
							name="number"
							value={number}
							onChange={this.handleInputContact}
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							required
						/>
					</label>
			<button type="submit">Add contact</button>
</Form>
		)
	}
}