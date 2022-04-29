import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Section from 'src/components/Section';

const About = () => (
  <Section name="about">
    <Grid container direction="row" alignItems="center">
      <Grid item container xs={12} sm={10} direction="column">
        <Typography variant="h1">What is</Typography>
        <Typography variant="h1">Navalia?</Typography>
        <Typography>/nɑ•vɑ•liɑ/</Typography>
        <Typography marginTop={3}>
          Navalia is the latin word for dock or wharf. We liked the trust
          metaphor of a dock to ships where our company is a dock for our
          clients' ambitious missions. We also liked the closeness of the dock
          to ships which resembles our collaboration with clients.
        </Typography>
        <Typography marginTop={2}>
          When we were forming Navalia, we dug deeper into why our partners and
          clients came specifically to us for software solutions that were
          critical to their business. It came down to two attributes:
          <b>Trust</b> and <b>Collaboration</b>.
        </Typography>
        <Typography marginTop={2}>
          We’re biased towards delivery. We do enough strategy to enable us to
          deliver. Our mission is to navigate the business and technology
          ecosystems to:
        </Typography>
        <ul>
          <li>
            Tie business strategy to action with technology, people and process
          </li>
          <li>Build new systems, and harvest products and platforms</li>
          <li>
            Use tried and tested patterns to strangle existing systems safely
            with a robust testing infrastructure
          </li>
          <li>Reinforce best practices with a pragmatic mindset</li>
        </ul>
      </Grid>
    </Grid>
  </Section>
);

export default About;
