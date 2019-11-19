import { RESTCountriesURL } from './constants';

export const getRegionInfo = (region) => {
    return fetch(`${RESTCountriesURL}region/${region}`)
        .then(data => data.json())
        .catch(error => error)
}
