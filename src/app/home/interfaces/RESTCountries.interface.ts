import { Region } from "../enums/Region.enum";
import { Currency } from "./Currency.interface";
import { Flags } from "./Flags.interface";
import { Language } from "./Language.interface";
import { RegionalBloc } from "./RegionalBloc.interface";
import { Translations } from "./Translation.interface";

export interface RESTCountries {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital?:       string;
    altSpellings?:  string[];
    subregion:      string;
    region:         Region;
    population:     number;
    latlng?:        number[];
    demonym:        string;
    area?:          number;
    timezones:      string[];
    borders?:       string[];
    nativeName:     string;
    numericCode:    string;
    flags:          Flags;
    currencies?:    Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs?: RegionalBloc[];
    cioc?:          string;
    independent:    boolean;
    gini?:          number;
}