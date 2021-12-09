import React from "react";
import "../App.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };

    this.style = {
      backgroundColor: "#292f36",
    };

    this.updateSelf = this.updateSelf.bind(this);

    this.updateSelf();
  }

  updateSelf = () => {
    if (this.props.selected) {
      this.style.backgroundColor = "#788899";
    }

    this.forceUpdate();
  };

  handleClick = (e) => {
    if (this.state.selected) {
      e.target.style.backgroundColor = "#292f36";
      this.setState({ selected: false });
    } else {
      e.target.style.backgroundColor = "#788899";
      this.setState({ selected: true });
    }
  };

  render() {
    return (
      <div
        className="square"
        onClick={this.handleClick}
        style={this.style}
      ></div>
    );
  }
}

export default Square;
