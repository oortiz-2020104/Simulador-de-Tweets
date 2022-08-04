import React, { useState } from 'react';

import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';

import { Fab } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import moment from 'moment';

import './SendTweet.scss';
import { TWEETS_STORAGE } from '../../utils/constants';

const SendTweet = (props) => {
    const { setSnackbarProps, allTweets } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    const sendTweet = (event, formValue) => {
        event.preventDefault();
        const { name, tweet } = formValue;
        let allTweetsArray = [];

        if (allTweets) {
            allTweetsArray = allTweets;
        }

        if (!name || !tweet) {
            setSnackbarProps({
                open: true,
                text: 'Todos los campos son obligatorios',
            });
        } else {
            formValue.time = moment();
            allTweetsArray.push(formValue);
            localStorage.setItem(
                TWEETS_STORAGE,
                JSON.stringify(allTweetsArray)
            );
            setSnackbarProps({
                open: true,
                text: 'Twitteado',
            });
            closeModal();
        }
        allTweetsArray = [];
    };

    return (
        <div className="send-tweet">
            <Fab
                className="send-tweet__open-modal"
                color="primary"
                aria-label="Add Tweet"
                onClick={openModal}
            >
                <AddIcon />
            </Fab>

            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet} />
            </ModalContainer>
        </div>
    );
};

export default SendTweet;
