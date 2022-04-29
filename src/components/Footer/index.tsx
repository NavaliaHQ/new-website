import Grid from '@mui/material/Grid';

import NavaliaLogo from 'src/components/NavaliaLogo';

const Footer = () => (
  <Grid
    container
    height={240}
    alignItems="center"
    direction="column"
    padding={4}
    sx={{ backgroundColor: 'background.default' }}
  >
    <NavaliaLogo />
  </Grid>
);

export default Footer;
