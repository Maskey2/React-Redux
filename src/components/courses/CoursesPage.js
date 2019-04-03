import React from 'react';

class CoursesPage extends React.Component{
    state= {
            course: {
                title: ""
            }
        };

    handleChange =event => {
    const course= {...this.state.course, title:event.target.value};
    this.setState({course});
    };

    handleSubmit =event =>{
        event.preventDefault();
        alert(this.state.course.title);
    };
    render(){
        return( <div>
        <form onSubmit ={this.handleSubmit}>
            <h2>  Courses</h2>
            <h3>Add Course</h3>
            <input
                type="text"
                onChange= {this.handleChange}
                value= {this.state.course.title}
                />
                    <input type="submit" value="Save"/>
        </form>
            <b><br/>
                Catalog	Course	Description:</b>
            <br/>
            This	course	provides	an	introduction	to	several	current	technologies,	and	how	they	can	be	used	to
            integrate	software	solutions	into	a	functional	large	interconnected	system.		The	course	will	focus	on
            contemporary	technologies	used	for	enterprise	software	development.
            <br/><b>Major	topics: </b>
            The	Integrated	Technologies	for	Enterprise	Systems	course	trains	computer	science	students	to
            be	technically	and	technologically	pertinent	in	the	ever	evolving	enterprise	software	development
            environment.</div>
    );
    }

}

export default CoursesPage;