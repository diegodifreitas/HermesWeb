import React from 'react'
import { Link } from 'react-router-dom'

const findRouteName = (url, param) => {
    return ROUTES_NAMES[url];
};

const BreadcrumbsItem = ({ ...rest, match }) => {
    const routeName = findRouteName(match.url, match.param)
    if (routeName) {
        return (
            match.isExact
                ? <li className='active'>{routeName}</li>
                : <li><Link to={match.url || ''}>{routeName}</Link></li>
        )
    }
    return null
}

export default BreadcrumbsItem



