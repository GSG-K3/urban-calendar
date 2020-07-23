import React, { Fragment } from 'react';
import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SuccessIcon from '../../../assets/likeIcon.png';
import Style from './style';

const Confirmation = () => {
  const classes = Style();
  const history = useHistory();

  const handleClick = () => {
    // return back to the Landing page
    history.push('/');
  };
  return (
    <Fragment>
      <main className={classes.content}>
        <img src={SuccessIcon} alt="Success confirmation icon" />
        <Typography variant="h5" gutterBottom className={classes.header}>
          Thank you!
          <br />
          You’re all set now
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          You will receive a confirmation email shortly.
          <br />
          We look forward to seeing you soon!
        </Typography>

        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Back to main page
        </Button>
      </main>
    </Fragment>
  );
};

export default Confirmation;
