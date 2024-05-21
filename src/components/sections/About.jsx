
import { basics } from "../../../cv";
import Section from "../Section";

const {summary} = basics;

const About = () => {
    return (
        <Section title="Acerca de mí">
            <p>{summary}</p>
        </Section>
    )
}

export default About;