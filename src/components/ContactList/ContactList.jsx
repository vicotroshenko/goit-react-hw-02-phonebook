import { List } from './ContactList.styled'

export const ContactList = ({
	contactList,
    onDelete
}) => {
	return (
		<List>
          {contactList.map(contact => (
              <li key={contact.id} id={contact.id} onClick={onDelete}>{contact.name}
                  <span>{contact.number}</span>
                  <button type="button" >Delete</button>
              </li>
          ))}
        </List>
	)
}