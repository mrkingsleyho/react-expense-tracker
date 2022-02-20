import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Making budgets effortless" />
                <CardContent>
                    <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                    <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
                      
                        Enter a transaction below
                    </Typography>
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                           <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Main;
