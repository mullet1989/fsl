import { InjectionToken } from '@angular/core';

export const SearchServiceEndpoint = new InjectionToken<string>('search-service');


export const UserSearchServiceEndpoint: string = "/user"
export const AthleteSearchServiceEndpoint: string = "/athlete"
