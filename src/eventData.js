import image1 from "./assets/event1.avif";
import image2 from "./assets/event2.avif";
import image3 from "./assets/event3.avif";
import image4 from "./assets/event4.avif";
import image5 from "./assets/event5.avif";
import image6 from "./assets/event6.avif";
import speakerImage1 from "./assets/speaker1.jpeg";
import speakerImage2 from "./assets/speaker2.jpeg";

const eventsData = [
    {
        id: 1,
        date: "10",
        month: "JULY",
        title: "DEC¿PHER",
        description: "Hosted by the Department of Computer Science and engineering (Cyber Security), this Capture The Flag (CTF) event promises to challenge your wits and keep you on the edge of your seat.",
        image: image1,
        details: ["​​🎉 Get ready for an electrifying hour of brain-teasing fun at Decipher! 🎉 Join us on July 10th, 2024, from 0900hrs to 1700hrs at Dayananda Sagar College of Engineering in Bengaluru. Hosted by the Department of Computer Science and engineering (Cyber Security), this Capture The Flag (CTF) event promises to challenge your wits and keep you on the edge of your seat.",
            "​​Whether you're a seasoned pro or a curious newbie, come prepared to crack codes, solve puzzles, and have a blast with fellow enthusiasts. Don't miss out on this thrilling adventure — see you there! 🚀"],
        speakers: [
            {
                name: "Dr. Jane Doe",
                bio: "Expert in Cyber Security with over 20 years of experience.",
                image: speakerImage1,
            },
            {
                name: "John Smith",
                bio: "Renowned hacker and security consultant.",
                image: speakerImage2,
            },
        ],
    },
    {
        id: 2,
        date: "10",
        month: "JULY",
        title: "State of FinTech in India - 2024",
        description: "Hosted by B Capital and Eximius Ventures, and powered by The Product Folks, this event is set to bring together the brightest minds and innovators in the FinTech industry.",
        image: image2,
        details: ["​State of FinTech in India - 2024', hosted by B Capital and Eximius Ventures, and powered by The Product Folks, is set to bring together the brightest minds and innovators in the FinTech industry.","This is your chance to network with PMs, early-stage founders, regulators, NBFCs, SMEs, and VCs focused on FinTech.","​Join us for a diverse panel discussion, networking over food and drinks, and a deep dive into the latest trends. Share groundbreaking ideas and help shape the future of FinTech in India! 🇮🇳"],
        speakers: [
            {
                name: "Alice Johnson",
                bio: "FinTech analyst and investor with a focus on emerging markets.",
                image: speakerImage1,
            },
            {
                name: "Robert Brown",
                bio: "CEO of a leading FinTech startup.",
                image: speakerImage2,
            },
        ],
    },
    {
        id: 3,
        date: "12",
        month: "JULY",
        title: "AEC Tech Meetup #1",
        description: "Dive deep into the future of design and construction with a panel discussion featuring 8 top-notch experts in AI-AEC.",
        image: image3,
        details: ["​🎉 Get ready for an electrifying evening at the AEC Tech Meetup #1! 🎉 Join us on July 12, 2024, from 6:00 PM at PRESET BUILDING SYSTEMS PVT LTD in Ashok Nagar, Bengaluru.","​We’re diving deep into the future of design and construction with a panel discussion featuring 8 top-notch experts in AI-AEC. Whether you're a tech enthusiast, a design aficionado, or just curious about how AI is revolutionizing the industry, this is the place to be. Don’t miss out on the chance to mingle, learn, and have a great time with fellow innovators. See you there! 🚀"],
        speakers: [
            {
                name: "Emily Davis",
                bio: "AI-AEC researcher and professor.",
                image: speakerImage1,
            },
            {
                name: "Michael Lee",
                bio: "Architect and tech enthusiast.",
                image: speakerImage2,
            },
        ],
    },
    {
        id: 4,
        date: "13",
        month: "JULY",
        title: "The Hacker House Hackathon",
        description: "Join The Residency for our first multi-location hackathon on July 13-14th in Bangalore!",
        image: image4,
        details: ["​Accel Atoms is a catalyst for the founder's 0-to-1 journey. Being a sector-focused program that ensures invaluable domain expertise, essential resources, and strategic networking, empowering founders to help increase their chances of success. Accel Atoms is launching their next AI cohort in August 2024.","Embrace your techno-optimism and get ready to build a brighter future together. We’re excited to see what you create! 🫶"],
        speakers: [
            {
                name: "Sarah Parker",
                bio: "Software engineer and hackathon veteran.",
                image: speakerImage1,
            },
            {
                name: "David Kim",
                bio: "Tech entrepreneur and mentor.",
                image: speakerImage2,
            },
        ],
    },
    {
        id: 5,
        date: "13",
        month: "JULY",
        title: "Apache Druid Meetup-2",
        description: "We're excited to invite you to the second Apache Druid user meetup in Bangalore!",
        image: image5,
        details: ["​We're excited to invite you to the second Apache Druid user meetup in Bangalore! Mark your calendars for July 13, 2024 at the Nutanix Office, Prestige Tech Park, Outer Ring Road, Bangalore.","​This event is a fantastic opportunity to connect with the vibrant open-source community of Druid contributors and power users. Whether you're looking to learn, share, or network, there's something for everyone. If you missed our first meetup, be sure to check out the recordings to see what you can look forward to."],
        speakers: [
            {
                name: "Kevin White",
                bio: "Big Data expert and Apache Druid contributor.",
                image: speakerImage1,
            },
            {
                name: "Laura Green",
                bio: "Data scientist with extensive experience in analytics.",
                image: speakerImage2,
            },
        ],
    },
    {
        id: 6,
        date: "14",
        month: "JULY",
        title: "Baithak with Prodomaniacs",
        description: "If you are someone who wants to connect with Product enthusiasts and is an established or an aspiring Product Manager, then this event is for you.",
        image: image6,
        details: ["Engage in insightful discussions, network with fellow product managers, and learn from industry experts."],
        speakers: [
            {
                name: "Nina Patel",
                bio: "Product manager with a decade of experience in tech companies.",
                image: speakerImage1,
            },
            {
                name: "Raj Mehta",
                bio: "Senior product manager at a leading tech firm.",
                image: speakerImage2,
            },
        ],
    },
];

export default eventsData;
