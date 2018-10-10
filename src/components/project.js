import React, { Component } from 'react';
import { Tabs , Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab:0 };

    }

    togglecategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
             { /*Project 1 */}
                <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff' , height: '176px' , background:
                  'url(https://reactjs.org/logo-og.png) center / cover '}} >React Project</CardTitle>
                  <CardText>
                  React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently 
                  update and render just the right components when your data changes.
                  </CardText>
                  <CardActions border>
                         <Button colored>Github</Button>
                         <Button colored>CodePen</Button>
                         <Button colored>LiveDemo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                  </CardMenu>
                 </Card>

                  {/*Project 2 */}
                  <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff' , height: '176px' , background:
                  'url(https://reactjs.org/logo-og.png) center / cover '}} >React Project</CardTitle>
                  <CardText>
                  React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently 
                  update and render just the right components when your data changes.
                  </CardText>
                  <CardActions border>
                         <Button colored>Github</Button>
                         <Button colored>CodePen</Button>
                         <Button colored>LiveDemo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                  </CardMenu>
                 </Card>

                 
                 {/*Project 3*/} 
                  <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff' , height: '176px' , background:
                  'url(https://reactjs.org/logo-og.png) center / cover '}} >React Project</CardTitle>
                  <CardText>
                  React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently 
                  update and render just the right components when your data changes.
                  </CardText>
                  <CardActions border>
                         <Button colored>Github</Button>
                         <Button colored>CodePen</Button>
                         <Button colored>LiveDemo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                  </CardMenu>
                 </Card>
                 </div>
                  
            )
            
        } else if (this.state.activeTab === 1) {
            return(
               <div className="projects-grid">
                { /*Project 1 */}
                   <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff' , height: '176px' , background:
                     'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_8UFLK8BhPdkmrekJh-EZkcECjM3NOEAoyydx6aVooveYR1vkQ) center / cover '}} >Node Project</CardTitle>
                     <CardText>
                     Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
                      Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. npm is a Node.js package
                      of open source library which is largest in the world.
                     </CardText>
                     <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                    </Card>
   
                </div>   


                
            )
        } else if (this.state.activeTab === 2 ) {
            return(
                <div className="projects-grid">
                { /*Project 1 */}
                   <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff' , height: '176px' , background:
                     'url(https://www.stwi.in/images/blog/html-code/html.jpg) center / cover '}} >Html Project</CardTitle>
                     <CardText>
                     Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.[4]

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                     </CardText>
                     <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                    </Card>
   
                </div>   

            )
        } else if (this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                { /*Project 1 */}
                   <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff' , height: '176px' , background:
                     'url(https://freevideolectures.com/wp-content/uploads/2018/03/mongo-db-development-and-admin.jpg) center / cover '}} >MonogDB Project</CardTitle>
                     <CardText>
                     MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc.,
                      and is published under a combination of the GNU Affero General Public License and the Apache License.
                     </CardText>
                     <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
                    </Card>
   
                </div>   
            )
        } 
        
    }
    
    render(){
        return(
            <div className= "category-tabs">
                     <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                       <Tab>React</Tab>
                       <Tab>NodeJS</Tab>
                       <Tab>HTML</Tab>
                       <Tab>MonogDB</Tab>
                     </Tabs>

                     <section >
                          <Grid >
                             <Cell col={12}>
                                <div className="content">{this.togglecategories()}</div>
                           </Cell>
                           </Grid>
                     </section>

            </div>
        )
    }
}

export default Project;