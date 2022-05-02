import { FC } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Section from 'src/components/Section';
import Article, { ArticleProps } from 'src/components/Article';

interface DockProps {
  articles: ArticleProps[];
}

const Dock: FC<DockProps> = ({ articles }) => (
  <Section name="blog">
    <Grid container alignItems="center">
      <Grid item container xs={12} sm={8} direction="column">
        <Typography variant="h1">Articles</Typography>
        <Grid container marginTop={8}>
          {articles.map((article) => (
            <Grid item container key={article.title} marginBottom={4}>
              <Article article={article} />
            </Grid>
          ))}
        </Grid>
        {articles.length >= 10 && (
          <Typography
            variant="button"
            component="a"
            href="https://medium.com/navalia"
            target="_blank"
            sx={{ color: 'text.primary', textDecoration: 'none' }}
          >
            See more posts...
          </Typography>
        )}
      </Grid>
    </Grid>
  </Section>
);

export default Dock;
