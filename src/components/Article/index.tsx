import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export interface ArticleProps {
  title: string;
  author: string;
  link: string;
  content: string;
  categories: string[];
  published: number;
}

const Article = ({
  article: { title, author, link, categories, published },
}: {
  article: ArticleProps;
}) => (
  <Grid
    container
    direction="column"
    component="a"
    href={link}
    target="_blank"
    sx={{ color: 'text.primary', textDecoration: 'none' }}
  >
    <Typography variant="h5">{title}</Typography>
    <Typography variant="body1">
      {author} - {new Intl.DateTimeFormat('en-US').format(published)}
    </Typography>
    <Grid container columnGap={2}>
      {categories?.map((category) => (
        <Typography key={category} variant="caption">
          #{category}
        </Typography>
      ))}
    </Grid>
  </Grid>
);

export default Article;
