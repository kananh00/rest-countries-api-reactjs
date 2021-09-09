
import { inject, observer } from "mobx-react";
import React from "react";
import http from "../../core/services/http";
import "./home.scss";
import AppStore from "../../Store";
import CountriesList from "../../components/countriesList/countriesList";
import AllCountriesService from "../../core/services/rest-country.service";
import { Modal } from "antd";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import SearchAndSelect from "../../components/searchAndSelect/searchAndSelect";
import Header from '../../components/header/Header';
interface IState {
  countries: ApplicationDto[];
  searchedAndFilteredCountry: ApplicationDto[];
  searchedCountryName: string;
  filteredRegion: ApplicationDto[];
  filteredRegionName: string;
  screenMode: string | null;
}
@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  private allCountriesService: AllCountriesService = new AllCountriesService();

  state: IState = {
    countries: [],
    searchedAndFilteredCountry: [],
    searchedCountryName: "",
    filteredRegion: [],
    filteredRegionName: "",
    screenMode: "light"
  };
  public getSearchedCountry = (searchedCountryName: string) => {
    this.setState({ searchedCountryName });
  };
  public getFilteredRegion = (filteredRegionName: string) => {
    this.setState({ filteredRegionName });
    console.log(filteredRegionName);
    this.getFiltered(filteredRegionName);
  }
  componentDidMount() {
    this.getAllCountries();
  }
  onModeChange = (mode:string) => {
    this.setState({screenMode: mode})
    console.log(this.state.screenMode)
  } 
  private getAllCountries = async () => {
    try {
      const countries = await this.allCountriesService.getAll();
      this.setState({
        countries,
      });
      
    } catch (error) {
      console.error(error);
      Modal.error({
        title: "Error",
      });
    }
  };
  // private getAllResults = async () => {
  //   try {
  //     const allResults = await this.allCountriesService.getAll;
  //     this.setState({
  //       allResults,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     Modal.error({
  //       title: "Error",
  //     });
  //   }
  // };
  private getSearched = async (name: string) => {
    try {
      const searchedAndFilteredCountry = await this.allCountriesService.getSearched(name);
      console.log(searchedAndFilteredCountry);

      this.setState({
        searchedAndFilteredCountry,
      });
    } catch (error) {
      console.error(error);
    }
  };

  private getFiltered = async (region: string) => {
    console.log(region)
    
       try {
      const searchedAndFilteredCountry = await this.allCountriesService.getFiltered(region);
      console.log(searchedAndFilteredCountry);

      this.setState({
        searchedAndFilteredCountry,
      });
    } catch (error) {
      console.error(error);
    
    }
  }
  onSearch = () => {
    this.getSearched(this.state.searchedCountryName);
  };
  onFilter = () => {
    console.log(this.state.filteredRegionName)
    console.log("hello")
    this.getFiltered(this.state.filteredRegionName);
  }
  render() {
    // console.log(this.state.filteredRegionName);
    console.log(this.state.screenMode)
    return (
      <div className={`test ${this.state.screenMode =="dark" ? "dark-home" : "light-home"}`}>
        <Header screenMode={this.state.screenMode} onModeChange={this.onModeChange}/>
        <SearchAndSelect mode={this.state.screenMode} handleSearchedValue={this.getSearchedCountry} handleSelectValue={this.getFilteredRegion} onEnterPressSearch={this.onSearch} onIconSearch={this.onSearch} onFilterSelect = {this.onFilter}/>
        {this.state.filteredRegionName||this.state.searchedCountryName ? (
          <CountriesList mode={this.state.screenMode} countriesList={this.state.searchedAndFilteredCountry} />
        ) : (
          <CountriesList mode={this.state.screenMode} countriesList={this.state.countries} />
        )}
      </div>
    );
  }
}

