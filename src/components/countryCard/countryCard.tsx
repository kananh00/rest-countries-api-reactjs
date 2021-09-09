import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import "./countryCard.scss";
interface IProps {
  mode: string | null;
}
export default class CountryCard extends Component<ApplicationDto, IProps>{
  render(){
return (
    <NavLink to={`/countries/${this.props.alpha3Code}`}>
      <div className={`country_card ${this.props.mode =="light" ? "light-card" : "dark-card"}`}>
        <img className="flag" src={this.props.flag} alt="flag" />
        <div className="country_desc">
          <p className={"country_name"}>{this.props.name}</p>
          <p className="country_info">
            <span className="api_title">Population: </span>
            {this.props.population}
          </p>
          <p className="country_info">
            <span className="api_title">Region: </span>
            {this.props.region}
          </p>
          <p className="country_info">
            <span className="api_title">Capital: </span>
            {this.props.capital}
          </p>
        </div>
      </div>
    </NavLink>
  );
  }
  
};

