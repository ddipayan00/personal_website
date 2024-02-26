import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NavBar from "./common_component/navbar";
const Education = () => {
    return (
        <div className="custom-container">
            <NavBar />
            {/* {"You wanna know about me ?"} */}
            <VerticalTimeline></VerticalTimeline>
        </div>
    );
};
export default Education