import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import type { NextPage } from 'next';
import Image from 'next/image';

import Section from 'components/Section';

const Home: NextPage = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <>
      <Section name="home">
        <Grid
          container
          direction="row"
          alignItems="center"
          height="60%"
          position="relative"
        >
          <Grid
            container
            item
            xs={12}
            position={isXs ? 'absolute' : 'static'}
            zIndex={-1}
            sm={6}
          >
            <Image
              src="/assets/code-block.svg"
              alt="Code block"
              width={494}
              height={320}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="end"
            flexDirection="column"
          >
            <Typography p={1} sx={{ backgroundColor: 'black' }} variant="h1">
              Shipping
            </Typography>
            <Typography p={1} sx={{ backgroundColor: 'black' }} variant="h1">
              new
            </Typography>
            <Typography p={1} sx={{ backgroundColor: 'black' }} variant="h1">
              ideas.
            </Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default Home;
