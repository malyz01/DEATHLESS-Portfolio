import React from 'react'

class CommissionWorkPage extends React.Component {
  
    
    render() {
        return (
            <React.Fragment>
             <div
             onLoad={four} 
             className='pageBackPic'>
                 <div className="picRow">
  <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/1-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/2-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/3-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/4-1.jpg" className="thumbPics"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/5-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/6-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/7-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/8-1.jpg" className="thumbPics"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/9-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/10-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/11-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/12-1.jpg" className="thumbPics"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/13-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/14-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/15-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/16-1.jpg" className="thumbPics"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/17-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/18-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/19-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/20-1.jpg" className="thumbPics"></img>
    </div>
    <div className="picColumn">
    <img src="/IMAGES/Commission-Work-Pics/21-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/22-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/23-1.jpg" className="thumbPics"></img>
    <img src="/IMAGES/Commission-Work-Pics/24-1.jpg" className="thumbPics"></img>
  </div>
  </div>
 
             </div>

            </React.Fragment>
        )
    }
}

var elements = document.getElementsByClassName("picColumn");
var i;
function four() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "25%";
    }
}

export default CommissionWorkPage