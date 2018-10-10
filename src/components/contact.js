import React, { Component } from 'react';
import { Grid , Cell , List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
              <Grid className="contact-grid"> 
              <Cell col={6}>
              <h2>Rukhsar Khan</h2>
              <img 
              src="https://scontent.fjai1-2.fna.fbcdn.net/v/t1.0-0/p370x247/43016099_759777267702279_3079691189901852672_n.jpg?_nc_cat=100&oh=0a9087984396f5670c7a68e442be062d&oe=5C546CE9" 
              alt="girl"
               style={{height: '250px'}}
              
              />
             <p style={{ width : '75%' , margin: 'auto', paddingTop: '1em'}}>
             I am here because, your requirement matches my skills and education. Even though I am not experienced, 
             I am keen at my interests. I am a hard worker, always ready to accept challenges, a go better person.
            
             </p>
              
              </Cell>    
              <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
                <div className='contact-list'>
                <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                       9057471169</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                       rukhsarkhan3127@gmail.com</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      rukhsarskype</ListItemContent>
                  </ListItem>
                   
                 </List>
        </div>
              </Cell>    

              </Grid>
               
            </div>
        )
    }
}

export default Contact;