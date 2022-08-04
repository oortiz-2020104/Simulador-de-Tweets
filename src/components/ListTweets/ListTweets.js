import React from 'react';

import Tweet from '../Tweet';

import { Grid } from '@mui/material';

import './ListTweets.scss';

const ListTweets = (props) => {
    const { allTweets, deleteTweet, setSnackbarProps  } = props;

    if (!allTweets || allTweets.length === 0) {
        return (
            <div className="list-tweets-empty">
                <h2>No hay tweets...</h2>
            </div>
        );
    }

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="list-tweets"
        >
            {allTweets.map((tweet, index) => (
                <Grid key={index} item xs={2} sm={4} md={4}>
                    <Tweet
                        tweet={tweet}
                        index={index}
                        deleteTweet={deleteTweet}
                        setSnackbarProps={setSnackbarProps}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ListTweets;
