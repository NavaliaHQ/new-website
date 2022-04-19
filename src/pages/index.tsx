import { useContext } from 'react';

import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import type { NextPage } from 'next';
import Image from 'next/image';

import Section from 'src/components/Section';
import { ThemeContext } from 'src/contexts/ThemeContext';

const Home: NextPage = () => {
  const theme = useTheme();
  const { themeName } = useContext(ThemeContext);
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <>
      <Section
        name="home"
        sx={{
          scrollMarginTop: theme.spacing(20),
        }}
      >
        <Grid container direction="row" alignItems="center" position="relative">
          <Grid
            container
            item
            xs={12}
            position={isXs ? 'absolute' : 'static'}
            zIndex={-1}
            sm={6}
          >
            <Image
              src={`/assets/code-block-${
                themeName === 'light' ? 'colored' : 'white'
              }.svg`}
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
            <Typography
              p={1}
              sx={{ backgroundColor: 'background.default' }}
              variant="h1"
            >
              Shipping
            </Typography>
            <Typography
              p={1}
              sx={{ backgroundColor: 'background.default' }}
              variant="h1"
            >
              new
            </Typography>
            <Typography
              p={1}
              sx={{ backgroundColor: 'background.default' }}
              variant="h1"
            >
              ideas.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section name="about">
        <Grid container direction="row" paddingTop={9} alignItems="center">
          <Grid item container xs={12} sm={6}>
            <Typography variant="h1">What is Navalia?</Typography>
            <Typography variant="body1">/nɑ•vɑ•liɑ/</Typography>
          </Grid>
        </Grid>
      </Section>
    </>
  );
};

export default Home;
