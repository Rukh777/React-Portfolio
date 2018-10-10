import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign: 'center'}}>
                           <img src ="https://scontent.fjai1-2.fna.fbcdn.net/v/t1.0-0/p370x247/43016099_759777267702279_3079691189901852672_n.jpg?_nc_cat=100&oh=0a9087984396f5670c7a68e442be062d&oe=5C546CE9"
                                alt="girl-img" style={{height: '200px'}}
                          />
                       </div>

                       <h2 style={{paddingTop: '2em'}}>Rukhsar Khan</h2>
                       <h4 style={{color: 'grey'}}>Programmer</h4>
                       <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                       <p>it would be a great privilege for me to work in a reputed company like your's who have such 
                                 strong visions and missions which are gonna impact 
                                   our lives in the most prominent ways. So it is the best platform to start my career as a fresher 
                                  and it's helpful in my professional growth.</p>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                         <h5>Address</h5>
                         <p>215 Hathipole Panna Dhay Marg, Udaipur Rajasthan  </p>
                         <h5>Phone</h5>
                         <p>9057471169 </p>
                         <h5>Email</h5>
                         <p>rukhsarkhan3127@gmail.com  </p>
                         <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                       </Cell>
                   <Cell className="resume-right-col" col={8}>
                          <h3>Education</h3>

                          <Education
                                      startYear={2016}
                                     endYear={2018}
                                     collegeName="Geetanjali Institute of Technical 
                                     Studies Dabok Udaipur"
                                     collegeDescription="MASTER OF COMPUTER APPLICATIONS "
                                     collegeCgpa=" CGPA 7.7"
                                     
                          />
                          <Education startYear={2013}
                                     endYear={2016}
                                     collegeName="Mohan Lal Sukhadia University "
                                     collegeDescription="BACHELOR OF COMPUTER APPLICATIONS "
                                     collegeCgpa=" CGPA 7.6"
                                     
                          />
                          <hr style={{borderTop: '3px solid #e22947' }} />

                          <h3>Internship</h3>
                          <Experience startYear={2017}
                                     endYear={2018}
                                     jobName="Oyaa Technologies"
                                     jobDescription="As a web developer, i developed the very fundamental js/css framework for company. 
                                     We inspired very from jQuery and Bootstrap, but since we have very huge users, 
                                     we need to keep the framework/library as fast as possible. 
                                     Programming Languages Asp.net Mvc, Bootstrap, Javascript "
                                    
                                     
                          />
                           <hr style={{borderTop: '3px solid #e22947'}} />
                          <h3>Technical Skills</h3>
                          <Skills 
                                    skills="Javascript"
                                    progress={90}
                                     
                          />
                          <Skills 
                                    skills="HTML/CSS"
                                    progress={100}
                                     
                          />
                          <Skills 
                                    skills="React"
                                    progress={60}
                                     
                          />
                          <Skills 
                                    skills="NodeJS"
                                    progress={50}
                                     
                          />
                          <Skills 
                                    skills="Php"
                                    progress={80}
                                     
                          />
                           <Skills 
                                    skills="Asp.net Mvc"
                                    progress={100}
                                     
                          />
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Resume;