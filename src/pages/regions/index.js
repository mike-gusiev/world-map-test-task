import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import HeadSection from 'components/HeadSection'
import RegionsList from './RegionsList'

const sectionTitle = 'Welcome to simple project witch provide info about rest countries. Choose one of the following regions.'

const RegionsPage = ({regionsList}) => {
    return (
        <Fragment>
            <HeadSection text={sectionTitle} />
            <RegionsList regionsList={regionsList} />
        </Fragment>
    )
}

RegionsPage.propTypes = {
    regionsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string
        })
    )
}

export default RegionsPage
