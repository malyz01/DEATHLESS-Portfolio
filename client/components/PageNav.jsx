import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

import PopUpNav from "./PopUpNav"



class PageNav extends React.Component {
    state = {
        popupIsShowing: false,
      }

popupContent = ''

togglePopup = () => {
    this.setState({
      popupIsShowing: !this.state.popupIsShowing
    })
  }

    render() {
        return (
           
             <nav>   
            <a onClick={() => this.setPopup(this.comNav)}>Nav</a>
            <div>
            {this.state.popupIsShowing && <PopUpNav content={this.popupContent} togglePopup={this.togglePopup}
            />}
          </div>
            </nav>
        )          
}


setPopup = (content) => {
    this.togglePopup(),
      this.popupContent = content
  }

comNav = (
<nav>
<div class='comNav'>
<ul>   
<li><Link to="/">Home</Link></li>,
<li><Link to="/Portfolio">Portfolio Work</Link></li>,
<li><Link to="/Commission">Commission Work</Link></li>
</ul>    
</div>
</nav>
)
}

export default PageNav

