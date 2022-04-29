import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Section from 'src/components/Section';

const Dock = () => (
  <Section name="blog">
    <Grid container alignItems="center">
      <Grid item container xs={12} sm={8} direction="column">
        <Typography variant="h1">Articles</Typography>
        <Typography variant="comment" marginTop={8}>
          // under construction
        </Typography>
      </Grid>
    </Grid>
  </Section>
);

export default Dock;
