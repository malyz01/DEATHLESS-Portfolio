import React from 'react'


class Form extends React.Component {
   constructor(props) {
       super(props);
       super(props);
       this.state = {
         name: '',
         email: '',
         message: '' };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   
   }

     handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

   handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      newsletter: this.state.newsletter
    };

   }
    render() {
        return (
            <React.Fragment>
<p className="formTitle">ASK ME ABOUT COMMISSION WORK!<br/> <strong>&darr;</strong></p>
 <div className="formContainer" id="formScale">
        <form onSubmit={this.handleSubmit} >
     <div className='contact'>
        <fieldset>
            <h2>Your full name:</h2>
            <textarea
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            required></textarea>
            </fieldset>
          <fieldset>
            <h2>Email Address:</h2>
            <textarea
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            required></textarea>
        </fieldset>
        <div id='messageForm'>           
          <fieldset>
            <h2>Message:</h2>

            <textarea tabIndex="5"
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            required></textarea>     
         </fieldset>

         <input
              name='Yes'
              type='checkbox'
              checked={this.state.newsletter}
              onChange={this.handleInputChange}
            />
         <h2>&nbsp;&uarr; Sign up to our newsletter?</h2>
         </div>
         <div className='submit-btn' > 
          <input type='submit' value='submit' />
          </div>
          </div>
        </form>
 </div>
            </React.Fragment>
        )
    }
}


    



export default Form