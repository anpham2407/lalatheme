import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
// import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

const ProTip = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
      {/* <LightBulbIcon className={classes.lightBulb} /> */}
      Pro tip: See more{' '}
      <Link href="https://material-ui.com/getting-started/templates/">templates</Link> on the
      Material-UI documentation.
    </Typography>
  );
}

export default React.memo(ProTip);