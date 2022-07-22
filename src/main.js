import React,{useContext} from 'react';
import {  Message, Menu,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Contextforabhishek} from "./Context"


function HeaderExampleUsersIcon ()
{

    const {activeItem ,setStates}=useContext(Contextforabhishek);

    const handleItemClick1 = (e,{name}) => {
        const r=name
        setStates(r);
       
    }

    const handleItemClick2 = (e,{name}) => {
        const r=name
        setStates(r);
    }

    const handleItemClick3 = (e,{name}) => {
        
        const r=name
        setStates(r);
    }

    const handleItemClick4 = (e,{name}) => {
        
        const r=name
        setStates(r);
    }

    
    return(
  <div>
  <h1  style={{marginTop:20,background:"#AA57F4"}}>
  <h1 className='ui center aligned container' style={{fontSize: '3.1rem',padding: 80,color:"white"}}><span style={{fontFamily:"jokerman",fontWeight:2000}}>CRUD Operations using semantic UI and REST API</span></h1>
  </h1>
  
  <h2 className='ui center aligned container'><Icon name="file alternate outline"/>Fully-Responsive Remember Me App List</h2>



  <Message className='ui center aligned container'>
    <Message.Header style={{background:"Lavender",height:25}}>This Project is made by Abhishek Kumar Singh</Message.Header>
    <p>
      This Project is a Demonstration of fully functioning CRUD operation
    </p>
  </Message>
  <br></br>
  <Menu className='ui center aligned container' style={{height:100,width:470,fontSize:"1.4rem",fontFamily:"jokerman"}}><Link to="/">
        <Menu.Item
          name='editorials'
         active={activeItem === 'editorials'}
          onClick={handleItemClick1}

        >
           <span style={{fontWeight: 'bold'}}>Add Me</span>
        </Menu.Item>
        </Link>
        <Link to="/get">
        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={handleItemClick2}
        >
           <span style={{fontWeight: 'bold'}}>Find Names</span>
         
        </Menu.Item>
        </Link>

        <Link to="/patch">
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={handleItemClick3}
        >
          <span style={{fontWeight: 'bold'}}>Change Names</span>
          
        </Menu.Item>
        </Link>
        <Link to="/delete">
        <Menu.Item
          name='upcomingEventss'
          active={activeItem === 'upcomingEventss'}
          onClick={handleItemClick4}
        >
           <span style={{fontWeight: 'bold'}}>Remove Names</span>
        
        </Menu.Item>
        </Link>
        
       
      </Menu>
  
  </div>
    )
}

export default HeaderExampleUsersIcon;