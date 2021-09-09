import React, { Component } from "react";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import CountryCard from "../countryCard/countryCard";
import "./countriesList.scss";

interface IProps {
  countriesList: ApplicationDto[];
  mode: string | null;
}

interface IState {
  countries: Array<ApplicationDto>;
  selectedCountry: ApplicationDto | null;
  selectedIndex: number;
}

export default class CountriesList extends Component<IProps, IState> {
  state: IState = {
    countries: [],
    selectedCountry: null,
    selectedIndex: -1,
  };

  render() {
    return (
      <div className="list_group">
        <div className="container-fluid p-lg-0">
          <div className="row">
            {this.props.countriesList.map(
              (country: ApplicationDto, index: number) => (
                <div className="col-12 col-md-4 col-lg-3" key={index}>
                  <CountryCard
                    mode={this.props.mode}
                    name={country.name}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                    flag={country.flag}
                    alpha3Code={country.alpha3Code}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
