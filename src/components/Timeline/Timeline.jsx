import React from 'react';
import './Timeline.scss';
import timelineData from '../../helpers/timeline-data';

const Timeline = () => {

    return (
        timelineData ? (
            <div className='timeline-container'>
                <div className='timeline'>
                    {timelineData.map((item, index) => (
                        <div key={index} className='timeline-item'>
                            <div className='timeline-content'>
                                <h2>{item.title}</h2>
                                <p>🏢 {item.company}</p>
                                <p>📅 {item.date}</p>
                                <br />
                                <p>{item.description}</p>
                                <ul>
                                    {item?.accomplishments?.map((accomplishment, index) => (
                                        <li key={index}>
                                            <span>▫️{accomplishment}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        ) : <p>Loading...</p>
    );
}

export default Timeline;
