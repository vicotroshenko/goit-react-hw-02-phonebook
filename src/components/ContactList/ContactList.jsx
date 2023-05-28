import { List } from './ContactList.styled'

export const ContactList = ({
	contactList,
    onDelete
}) => {
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