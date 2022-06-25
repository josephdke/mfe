import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from  '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import MarketingApp from './components/MarketingApp';

export default () => {
    return <div>
        <h1>Hi there!</h1>
        <hr/>
        <MarketingApp />
        </div>;
};