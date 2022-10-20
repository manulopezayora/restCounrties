import { Acronym } from "../enums/Acronym.enum";
import { Name } from "../enums/Name.enum";
import { OtherAcronym } from "../enums/OtherAcronym.enum";
import { OtherName } from "../enums/OtherName.enum";

export interface RegionalBloc {
    acronym:        Acronym;
    name:           Name;
    otherNames?:    OtherName[];
    otherAcronyms?: OtherAcronym[];
}
