import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class index extends React.Component{
  constructor (){
    super();
    this.state={
      employee: ""
    }
  }
  
  
  getInfo = () => {
  fetch("https://vet-api-8-1.herokuapp.com/api/employees").then((response)=>{
    return response.json()
  }).then((info)=> {
    this.setState({employee:info})
  })
  }
}

  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default index