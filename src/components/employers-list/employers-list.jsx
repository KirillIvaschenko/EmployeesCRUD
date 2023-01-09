import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';  

const EmployersList = ({data, onDelete, onToggleProp, filter}) => {

  


  const elements = data.map(user => {
    const {id, ...itemProps} = user;
    return (
      <EmployersListItem 
          key={id} 
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    )
  })
  
  
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployersList;