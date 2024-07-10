import React from 'react';
import { useParams, Link} from 'react-router-dom';
import eventsData from '../eventData';
import './DetailPage.css';

const DetailPage = () => {
    const { id } = useParams();
    const event = [...eventsData].find(event => event.id === parseInt(id));

    if (!event) {
        return <div className="not-found">Event not found</div>;
    }

    return (
        <div className="detail-page">
            <h1 className="detail-title">{event.title}</h1>
            <div className="detail-container">
                <div className="detail-details">
                    <h2>Details</h2>
                    <p>{event.details}</p>
                    <Link to="/register" className="register-button">Register</Link>
                </div>
                <div className="detail-speakers">
                    <h2>Speakers</h2>
                    {event.speakers.map((speaker, index) => (
                        <div key={index} className="speaker">
                            <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                            <h3>{speaker.name}</h3>
                            <p>{speaker.bio}</p>
                        </div>
                    ))}
                </div>
                <div className="detail-info">
                    <div className="detail-date">
                        <span>{event.date} {event.month}</span>
                    </div>
                    <p>{event.description}</p>
                    <img src={event.image} alt={event.title} className="detail-image" />
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
