import { CountryCurrencyDto } from "./countryCurrency.dto";
import { CountryLanguageDto } from "./countryLanguage.dto";

export interface SingleCountryDto {
	flag: string,
	name: string,
	nativeName: string,
	population: number,
	region: string,
	subregion: string,
	capital: string,
	currencies: CountryCurrencyDto[];
	topLevelDomain: string[],
	languages: CountryLanguageDto[];
	borders: string[];
}