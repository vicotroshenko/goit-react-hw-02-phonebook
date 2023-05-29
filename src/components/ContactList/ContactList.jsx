import React, { Component } from "react";
import PropTypes from 'prop-types';
import { List } from './ContactList.styled'

export class ContactList extends Component {
    render() {
        const { contactList, onDelete } = this.props;
        return (
            <List>
              {contactList.map(contact => (
                  <li key={contact.id}>{contact.name}
                      <span>{contact.number}</span>
                      <button type="button" id={contact.id} onClick={onDelete}>Delete</button>
                  </li>
              ))}
            </List>
        )
    }
}

ContactList.propTypes ={
    contactList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelete: PropTypes.func.isRequired,
  }