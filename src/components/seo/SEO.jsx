import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, name, type, noindex }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={canonical} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */} {/* TODO: Add og image support later */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    canonical: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    noindex: PropTypes.bool
};

SEO.defaultProps = {
    canonical: 'https://sabs-website-three.vercel.app/',
    name: 'SABS & CO',
    type: 'website',
    noindex: false
};

export default SEO;
