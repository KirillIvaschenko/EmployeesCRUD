import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {

  

  render() {
    const {filter, onFilterSelect} = this.props
    const buttonsData = [
      {name: 'all', label: 'Все сотрудники', colored: false},
      {name: 'rise', label: 'На повышение', colored: false},
      {name: 'moreThen1000', label: 'З/П больше 1000$', colored: true},
    ]

    const buttons = buttonsData.map(({name, label, colored}) => {
      const active = filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light'
      

      return (
        <button 
            className={`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => onFilterSelect(name)}
            >
              {label}
        </button>
      )
    })

    return (
      
      <div className="btn-group">
        {buttons}
        
      </div>
    )
  }

  
}


export default AppFilter