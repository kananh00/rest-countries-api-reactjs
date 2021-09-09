import React, { Component } from "react";
import AllCountriesService from "../../core/services/rest-country.service";
import { SingleCountryDto } from "../../interfaces/dtos/singlecountry.dto";
import backArrow from "../../assets/images/icons/back-arrow.svg";
import "./SingleCountry.scss";
import Header from "../../components/header/Header";

interface IProps {
  history: any;
  match: any;
}

interface IState {
  selectedCountry?: SingleCountryDto;
  screenMode: string | null;
}

export default class SingleCountry extends Component<IProps, IState> {
  private allCountriesService: AllCountriesService = new AllCountriesService();

  state: IState = {
    selectedCountry: undefined,
    screenMode: ''
  };

  componentDidMount() {
    this.getSingle(this.props.match.params.alpha3Code);
  }
  onModeChange = (mode:string) => {
    this.setState({screenMode: mode})
  } 
  private getSingle = async (alpha3Code: string) => {
    try {
      const selectedCountry = await this.allCountriesService.getSingle(
        alpha3Code
      );
      console.log(selectedCountry);

      this.setState({
        selectedCountry,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { selectedCountry } = this.state;
    console.log(
      selectedCountry?.languages.map((language) => language.name).join(", ")
    );
    return (
      <div>
        <Header screenMode={this.state.screenMode}  onModeChange={this.onModeChange}/>
        <div className={`single_country ${this.state.screenMode==="dark" ? "dark" : "light"}`}>
          <button
            className="back_btn"
            onClick={() => this.props.history.goBack()}
          >
            <img className="back_arrow" src={backArrow} alt="back arrow"></img>{" "}
            Back
          </button>
          <div className="container-fluid p-0">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <img
                  className="detailed_page_flag"
                  src={selectedCountry?.flag}
                  alt="flag"
                />
              </div>

              <div className="col-12 col-lg-6">
                <div className="row align-items-center ml-2 ml-md-0">
                  <div className="col-12 col-lg-6 p-0">
                    <p className="detailed_page_name">
                      {selectedCountry?.name}
                    </p>
                    <p className="detailed_page_info">
                      <span className="detailed_page_title">Native Name: </span>
                      {selectedCountry?.nativeName}
                    </p>
                    <p className="detailed_page_info">
                      <span className="detailed_page_title">Population: </span>
                      {selectedCountry?.population}
                    </p>
                    <p className="detailed_page_info">
                      <span className="detailed_page_title">Region: </span>
                      {selectedCountry?.region}
                    </p>
                    <p className="detailed_page_info">
                      <span className="detailed_page_title">Sub Region: </span>
                      {selectedCountry?.subregion}
                    </p>
                    <p className="detailed_page_info">
                      <span className="detailed_page_title">Capital: </span>
                      {selectedCountry?.capital}
                    </p>
                  </div>
                  <div className="col-12 col-lg-6 p-0 pl-lg-4">
                    <div className="single_country_second_info">
                      <p className="detailed_page_info">
                        <span className="detailed_page_title">
                          Top Level Domain:{" "}
                        </span>
                        {selectedCountry?.topLevelDomain}
                      </p>
                      <p className="detailed_page_info">
                        <span className="detailed_page_title">
                          Currencies:{" "}
                        </span>
                        {selectedCountry?.currencies.map(
                          (currency) => currency.name
                        )}
                      </p>
                      <p className="detailed_page_info">
                        <span className="detailed_page_title">Languages: </span>
                        {selectedCountry?.languages
                          .map((language) => language.name)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="detailed_page_info border_countries">
                  <p className="col-lg-4 detailed_page_title borders ml-2 ml-md-0 p-0">
                    Border Countries:
                  </p>
                  <div className="container-fluid  ml-2 ml-md-0">
                    <div className="row justify-content-end">
                      {selectedCountry?.borders.map((item, i) => (
                        <div className="col-4 col-lg-3 ml-lg-2 p-0">
                          <p className="border_country" key={i}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
