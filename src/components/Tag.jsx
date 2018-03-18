import React from 'react';
import ShortDescription from './ShortDescription';
class Tag extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      shortDescriptionVisibleOnPage: false
    };
    this.showShortDescription = this.showShortDescription.bind(this);
  }
  showShortDescription() {
    this.setState({shortDescriptionVisibleOnPage: true});

  }
  render(){
    let shortDescriptionAreaContent = null;
    if(this.state.shortDescriptionVisibleOnPage){
      shortDescriptionAreaContent = <ShortDescription/>;
    } else {
      shortDescriptionAreaContent =
        <p onMouseEnter={this.showShortDescription}>Full Stack Web Developer</p>;
    }
    return (
      <div>
        {shortDescriptionAreaContent}
      </div>
    );
  }
}

export default Tag;
