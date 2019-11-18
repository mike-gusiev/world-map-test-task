import React from 'react'
import PropTypes from 'prop-types'
import {
    StyledSectionHeaderWrapper,
    StyledSectionHeaderText
} from './styles'

const HeadSection = ({text}) => {
    return (
        <StyledSectionHeaderWrapper>
            <StyledSectionHeaderText>
                {text}
            </StyledSectionHeaderText>
        </StyledSectionHeaderWrapper>
    )
}

HeadSection.propTypes = {
    text: PropTypes.string
}

export default HeadSection
