import React, { Component } from "react";
import darkIcon from "../../assets/images/icons/dark-icon.svg";
import filledDarkIcon from "../../assets/images/icons/dark-icon-filled.svg";
import "./Header.scss";

// interface IProps{
//     detailedTheme: string;
//     homeTheme: string;
// }
interface IProps{
  screenMode: string | null;
  onModeChange: any;
}
// interface IState{
//   appTheme: string | null;
// }
export default class Header extends Component<IProps> {
  state = {
    appTheme: this.props.screenMode,
  };

  onBtnClicked = () => {
    if (this.state.appTheme === "light") {
      this.setState({ appTheme: "dark" });
      this.props.onModeChange("dark")
    } else {
      this.setState({ appTheme: "light" });
      this.props.onModeChange("light")
    }
    console.log(this.state.appTheme)
    // localStorage.setItem('appTheme', this.state.appTheme);
  };
  
  render() {
    console.log(localStorage.getItem('appTheme'))
    return (
      <div className={`${this.state.appTheme}_mode header`}>
        <p className="header_title">Where in the world?</p>
        <div onClick={this.onBtnClicked} className="change_mode_btn">
          <img
            src={`${this.state.appTheme==="light" ? darkIcon : filledDarkIcon}`}
            alt="dark mode icon"
            className={`${this.state.appTheme}_icon mode_icon`}
          />
          <p className={`${this.state.appTheme}_mode_text mode_text`}>
            Dark Mode
          </p>
        </div>
      </div>
    );
  }
}
