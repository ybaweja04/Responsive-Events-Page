import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';
import image1 from "../assets/event1.avif";
import image2 from "../assets/event2.avif";
import image3 from "../assets/event3.avif";
import image4 from "../assets/event4.avif";
import image5 from "../assets/event5.avif";
import image6 from "../assets/event6.avif";

const FirstPage = () => {
    const navigate = useNavigate();
    const initialEvents = [
        {
            id: 1,
            date: "10",
            month: "JULY",
            title: "DEC¿PHER",
            description: "Hosted by the Department of Computer Science and engineering (Cyber Security), this Capture The Flag (CTF) event promises to challenge your wits and keep you on the edge of your seat.",
            image: image1,
        },
        {
            id: 2,
            date: "10",
            month: "JULY",
            title: "State of FinTech in India - 2024",
            description: "hosted by B Capital and Eximius Ventures, and powered by The Product Folks, is set to bring together the brightest minds and innovators in the FinTech industry.",
            image: image2,
        },
        {
            id: 3,
            date: "12",
            month: "JULY",
            title: "AEC Tech Meetup #1",
            description: "​We’re diving deep into the future of design and construction with a panel discussion featuring 8 top-notch experts in AI-AEC. ",
            image: image3,
        },
        {
            id: 4,
            date: "13",
            month: "JULY",
            title: "The Hacker House Hackathon",
            description: "​Join The Residency for our first multi-location hackathon on July 13-14th in Bangalore!",
            image: image4,
        },
        {
            id: 5,
            date: "13",
            month: "JULY",
            title: "Apache Druid Meetup-2",
            description: "​We're excited to invite you to the second Apache Druid user meetup in Bangalore!",
            image: image5,
        },
        {
            id: 6,
            date: "14",
            month: "JULY",
            title: "Baithak with Prodomaniacs",
            description: "​If you are someone who wants to connect with Product enthusiasts and is an established or an aspiring Product Manager, then this event is for you.",
            image: image6,
        }
    ];

    const [events, setEvents] = useState(initialEvents);

    const loadMoreEvents = () => {
        // load more events
        const moreEvents = [
            // Add more event objects here
        ];
        setEvents([...events, ...moreEvents]);
    };

    const handleCardClick = (id) => {
        navigate(`/event/${id}`);
    };

    return (
        <div className="App">
            <h1>UPCOMING EVENTS</h1>
            <div className="events-grid">
                {events.map((event) => (
                    <div key={event.id} className="event-card" onClick={() => handleCardClick(event.id)}>
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-info">
                            <div className="event-date">
                                <i className="fas fa-calendar-alt event-icon"></i>
                                <div className="event-month-day">
                                    <div className="event-month">{event.month}</div>
                                    <div className="event-day">{event.date}</div>
                                </div>
                            </div>
                            <div className='event-desc'>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="load-more-button" onClick={loadMoreEvents}>
                Load More
            </button>
        </div>
    );
};

export default FirstPage;
