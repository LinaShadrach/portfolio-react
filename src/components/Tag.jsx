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
        <div>
          <h3 onMouseEnter={this.showShortDescription}>Web Developer</h3>
        </div>;
    }
    return (
      <div>
        {shortDescriptionAreaContent}
      </div>
    );
  }
}

export default Tag;
