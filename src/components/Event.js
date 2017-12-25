/**
 * Created by HP on 25-Dec-17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Event = props => {
    const {is_free, start, name, logo, description, end} = props.event;

    return (
        <div className="event">
            <a className="event__link">
                <div className="event__picture-container">
                    <img src={logo.url} className="event__picture"/>
                    <div className="event__price-type">{is_free ? 'FREE' : ''}</div>
                </div>
                <div className="event__info-container">
                    <div className="event__date">{start.local}</div>
                    <div className="event__title">name.text</div>
                    <div className="event__description">{description.text ? description.text.substring(0, 100) + '..' : ''}</div>
                </div>
                <div className="event__footer">
                    <div className="event__tags">{end.timezone}</div>
                    <div className="event__save"></div>
                </div>
            </a>
        </div>
    )
};

/**
 * Validating passing of event as a prop
 * @type {{event}}
 */
Event.propTypes = {
    event : PropTypes.object.isRequired,
};


export default Event;