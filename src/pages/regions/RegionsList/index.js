import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

import { StyledContainer } from './styles'
import RegionItem from '../RegionItem/index'

const Regions = ({regionsList}) => (
    <StyledContainer>
        <Row>
            {regionsList.map(item => (
                <Col key={item.name} lg={4} md={6} sm={12} xm={12}>
                    <RegionItem item={item} />
                </Col>
            ))}
        </Row>
    </StyledContainer>
)

Regions.propTypes = {
    regionsList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string
        })
    )
}

export default Regions;
