import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { compareAbc, compareDesc, sortOptions } from 'utils/helpers'
import { StyledContainer, StyledUl, StyledButton, StyledTitle, StyledCol } from './styles'
import { Row, Col } from 'react-bootstrap'
import CategoriesItem from '../CountriesItem'

const CountriesList = ({countriesList, setSelectedCounty}) => {
    
    const [filteredCountriesList, setFilteredCountriesList] = useState(null);
    const [nameSortType, setNameSortType] = useState(sortOptions.abc);
    const [populationSortType, setPopulationSortType] = useState(sortOptions.abc);

    
    useEffect(() => {
        setFilteredCountriesList(countriesList)
        // eslint-disable-next-line
    }, []) 

    const filterByName = (option) => {
        if (option === sortOptions.abc) {
            setFilteredCountriesList([...filteredCountriesList].sort((a,b) => compareAbc(a, b, 'name')))
            setNameSortType(sortOptions.desc)
        } else if (option === sortOptions.desc) {
            setFilteredCountriesList([...filteredCountriesList].sort((a,b) => compareDesc(a, b, 'name')))
            setNameSortType(sortOptions.abc)
        }
    }

    const filterByPopulation = (option) => {
        if (option === sortOptions.abc) {
            setFilteredCountriesList([...filteredCountriesList].sort((a,b) => compareAbc(a, b, 'population')))
            setPopulationSortType(sortOptions.desc)
        } else if (option === sortOptions.desc) {
            setFilteredCountriesList([...filteredCountriesList].sort((a,b) => compareDesc(a, b, 'population')))
            setPopulationSortType(sortOptions.abc)
        }
    }

    return (
        <Fragment>
            {filteredCountriesList &&
                <StyledContainer>
                    <Row>
                        <StyledCol xs={{span: 6, offset: 3}}>
                            <StyledButton 
                                color={'red'}
                                onClick={() => filterByName(nameSortType)}
                            >Sort by name ({nameSortType})
                            </StyledButton>
                        </StyledCol>
                        <StyledCol xs={{span: 6, offset: 3}}>
                            <StyledButton
                                color={'blue'}
                                onClick={() => filterByPopulation(populationSortType)}
                            >Sort by population: ({populationSortType === sortOptions.abc ? '123' : '321'})
                            </StyledButton>
                        </StyledCol>
                        <StyledCol xs={{span: 6, offset: 3}}>
                            <StyledTitle>Countries List</StyledTitle>
                        </StyledCol>
                        <Col xs={12}>
                            <StyledUl>
                                {filteredCountriesList.map(({name, population, flag}) => 
                                    <CategoriesItem
                                        key={name}
                                        name={name}
                                        population={population}
                                        flag={flag}
                                        setSelectedCounty={setSelectedCounty}
                                    />
                                )}
                            </StyledUl>
                        </Col>
                    </Row>
                </StyledContainer>
            }
        </Fragment>
    )
}

CountriesList.propTypes = {
    countriesList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            population: PropTypes.number,
            flag: PropTypes.string
        })
    ),
    setSelectedCountry: PropTypes.func
}

export default CountriesList

