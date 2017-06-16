'use strict';

import React from 'react'

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ServiceParts from './ServiceParts'

import styles from '../styles/ProductDetails.css'

function createMarkup(html) {
  return { __html: html };
}

class ProductDetails extends React.Component {

  render() {

    const { product } = this.props;

    return (

      <Paper elevation={4} className={styles.padding}>
        <Grid container>

          <Grid item xs={12} lg={12}>
              <Grid container gutter={24} direction="column">

                <Grid item>
                  <Typography type="headline" component="h3">
                    { product.title }
                  </Typography>
                </Grid>

                <Grid item>
                  <Grid container>
                    <Grid item xs={4}>
                      <img width="100" height="100" src={product.localPath} />
                    </Grid>
                    <Grid item md={8} xs={8}>
                      { product.description }
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <table dangerouslySetInnerHTML={ createMarkup(product.properties) } />
                </Grid>

                <Grid item>
                  <ServiceParts parts={ product.serviceParts || [] } />
                </Grid>

              </Grid>

          </Grid>

        </Grid>
      </Paper>
    )
  }
}

export default ProductDetails;
