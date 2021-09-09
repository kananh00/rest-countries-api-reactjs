import http from "./http";
import { ApplicationDto } from "../../interfaces/dtos/application.dto";
import { AxiosResponse } from "axios";
import { SingleCountryDto } from "../../interfaces/dtos/singlecountry.dto";

export default class AllCountriesService {
	async getAll(): Promise<ApplicationDto[]> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/all`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getSingle(alpha3Code: string): Promise<SingleCountryDto> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/alpha/${alpha3Code}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getSearched(name: string): Promise<ApplicationDto[]> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/name/${name}?fullText=true`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
	async getFiltered(region: string): Promise<ApplicationDto[]> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/region/${region}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}


}