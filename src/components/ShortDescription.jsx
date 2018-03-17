import React from "react";
import Tag from "./Tag";
class ShortDescription extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       tagVisibleOnPage: false
     };
     this.showTag = this.showTag.bind(this);
   }
  showTag(event) {
    this.setState({tagVisibleOnPage: true});
  }

  render(){
    let tagAreaContent = null;
    if(this.state.tagVisibleOnPage){
      tagAreaContent = <Tag/>
    } else {
      tagAreaContent = <h4 onMouseEnter={this.showTag}>Instructor of C#/.NET at Epicodus in Portland, Or.</h4>
    }
    return (
      <div>
        {tagAreaContent}
      </div>
    );
  }
}

export default ShortDescription;
