import { Component } from 'react';
import './employers-add-form.css';



class EmployersAddForm extends Component {
  
  state = {
    name: '',
    salary: ''
  }
  

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  static onLog = () => {
    console.log('Hey')
  }
  
  static logged = 'on';

  render() {
    const {name,salary} = this.state;
    

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit}
            className="add-form d-flex">
              
            <input type="text"
                className="form-control new-post-label"
                placeholder="Как его зовут?"
                name='name'
                value={name}
                onChange={this.onValueChange}/>
            <input type="number"
                className="form-control new-post-label"
                placeholder="З/П в $?"
                name='salary'
                value={salary}
                onChange={this.onValueChange}/>
  
            <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}
// EmployersAddForm.onValueChange();
EmployersAddForm.onLog();
console.log(EmployersAddForm.logged)
export default EmployersAddForm;