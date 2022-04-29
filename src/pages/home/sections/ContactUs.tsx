import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Section from 'src/components/Section';

const ContactUs = () => (
  <Section name="contact">
    <Grid container direction="row" alignItems="center">
      <Grid item container xs={12} sm={10} direction="column">
        <Typography variant="h1">Contact us</Typography>
        <Grid marginTop={3}>
          <TextField fullWidth name="email" label="E-mail" />
        </Grid>
        <Grid marginTop={2}>
          <TextField
            fullWidth
            name="text"
            label="How can we help you?"
            multiline
            minRows={15}
            maxRows={15}
          />
        </Grid>
        <Grid marginTop={2} alignSelf="flex-end">
          <Button variant="contained" sx={{ paddingX: 6 }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Section>
);

export default ContactUs;
