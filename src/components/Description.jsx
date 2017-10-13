import React from "react";

class Description extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       descriptionVisibleOnPage: false
     };
     this.showDescription = this.showDescription.bind(this);
   }
  showDescription(event) {
    console.log(this);
    this.setState({descriptionVisibleOnPage: true});
    console.log(this.state.descriptionVisibleOnPage);

  }
  render(){
    return (
      <div>
        <h3 onMouseOver={this.showDescription}>Web Developer</h3>
      </div>
    );
  }
}

export default Description;
