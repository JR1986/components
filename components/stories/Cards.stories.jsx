import React from 'react';
import Card from '../Card';
import Grid from '../Grid';

export default {
  title: 'Cards/Card',
};

export const Cards = () => (
  <Grid container spacing={3}>
    <Grid item xs={3}>
      <Card
        cardHeading="Card headline"
        cardBody="Card body text Card body text Card body text Card body text Card body text Card body text"
        image="https://fashionunited.com/PDyXAGRV7PqcigwS2XEJKA5vYMN152HWjG4la4ldIkc/gravity:sm/quality:70/aHR0cHM6Ly9mYXNoaW9udW5pdGVkLmNvbS9pbWcvbWFzdGVyLzIwMjAvMTIvMzEvZGVza3RvcC1zczIxLWluZGV4LTEwNTB4NTgwLTAtem5vYjBsZWEtMjAyMC0xMi0zMS5qcGVn?v=Article"
      />
    </Grid>
  </Grid>
);
