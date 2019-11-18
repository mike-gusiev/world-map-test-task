import React, { Fragment, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { regions } from 'utils/constants'
import { getRegionInfo } from 'api/requests'

import CountriesList from './CountriesList'
import HeadSection from 'components/HeadSection'
import Loader from 'components/Loader'
import Modal from 'components/Modal'
import SelectedCountry from './SelectedCountry'

import { 
    ErrorWrapper,
    LoaderWrapper
} from './styles'

const sectionTitle = `There you could choose country to get more details about it. Also you could filter any row by clicking on the row header.`

const types = {
    REQUEST_FOR_DATA: 'REQUEST_FOR_DATA',
    ERROR_OCCURRED: 'ERROR_OCCURRED',
    RESOLVE_DATA: 'RESOLVE_DATA',
    SELECTED_COUNTRY_CHANGED: 'SELECTED_COUNTRY_CHANGED'
}

const initialState = {
    regionData: null,
    countriesList: null,
    loading: false,
    error: null,
    selectedCounty: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.REQUEST_FOR_DATA:
        return {
            ...state,
            loading: true
        };
    case types.ERROR_OCCURRED:
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    case types.RESOLVE_DATA:
        const countriesList = action.payload
            .map(({ name, population, flag }) => ({ name, flag, population }))
        return {
            ...state,
            loading: false,
            regionData:
            action.payload,
            countriesList
        };
    case types.SELECTED_COUNTRY_CHANGED:
      return {
          ...state,
          selectedCounty: action.payload
        };
    default:
      return {...state};
  }
}

const CountriesPage = ({match}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = async (region) => {
        try {
            const result = await getRegionInfo(region)
            dispatch({type: types.RESOLVE_DATA, payload: result})
        } catch {
            const error = 'Something went wrong in request. Try to reload'
            dispatch({type: types.ERROR_OCCURRED, payload: error})
        }
    }

    useEffect(() => {
        dispatch({type: types.REQUEST_FOR_DATA})
        const currentRegion = match.params.region

        if (regions[currentRegion]) {
            fetchData(currentRegion)
        } else {
            const error = `That region doesen't supported by api. Supported regions: Africa, Americas, Asia, Europe, Oceania. Check your url.`
            dispatch({type: types.ERROR_OCCURRED, payload: error})
        }
        
    }, [match.params.region])

    const onCloseModal = () => {
        dispatch({type: types.SELECTED_COUNTRY_CHANGED, payload: null})
    }

    const setSelectedCountyHandler = (name) => {
        const country = regionData.find(item => item.name === name)
        dispatch({type: types.SELECTED_COUNTRY_CHANGED, payload: country})
    }

    const {loading, error, selectedCounty, countriesList, regionData} = state

    return (
        <Fragment>
            <HeadSection text={sectionTitle} />
            {loading && 
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            }
            {error && 
                <ErrorWrapper>
                    <p>Error Occurred</p>
                    {error}
                </ErrorWrapper>
            }
            {selectedCounty &&
                <Modal onClose={onCloseModal}>
                    <SelectedCountry country={selectedCounty} />
                </Modal>
            }
            {countriesList &&
                <CountriesList
                    countriesList={countriesList}
                    setSelectedCounty={setSelectedCountyHandler}
                    regionData={regionData} />
            }
        </Fragment>
    )
}

CountriesPage.propTypes = {
    match: PropTypes.object
}

export default CountriesPage
