import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import SendTweet from './components/SendTweet/SendTweet';
import ListTweets from './components/ListTweets/ListTweets';

import { Container, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TWEETS_STORAGE } from './utils/constants';

function App() {
    const [snackbarProps, setSnackbarProps] = useState({
        open: false,
        text: null,
    });

    const [allTweets, setAllTweets] = useState([]);
    const [reloadTweets, setReloadTweets] = useState(false);

    useEffect(() => {
        const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
        const allTweetsArray = JSON.parse(allTweetsStorage);
        setAllTweets(allTweetsArray);
        setReloadTweets(false);
    }, [reloadTweets]);

    const deleteTweet = (index) => {
        allTweets.splice(index, 1);
        setAllTweets(allTweets);
        localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
        setReloadTweets(true);
    };

    const snackbarClose = () => {
        setSnackbarProps({
            ...snackbarProps,
            open: false,
        });
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={snackbarClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Container className="tweets-simulator" maxWidth={false}>
            <Header />
            <SendTweet
                setSnackbarProps={setSnackbarProps}
                allTweets={allTweets}
            />
            <ListTweets
                allTweets={allTweets}
                deleteTweet={deleteTweet}
                setSnackbarProps={setSnackbarProps}
            />
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={snackbarProps.open}
                autoHideDuration={1000}
                onClose={snackbarClose}
                message={<span>{snackbarProps.text}</span>}
                action={action}
            />
        </Container>
    );
}

export default App;
