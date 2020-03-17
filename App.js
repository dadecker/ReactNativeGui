import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from '@material-ui/core/Grid';
import SimpleKeyboard from './components/SimpleKeyboard';
import CenteredGrid from './components/CenteredGrid';


export default function App() {  

  return (
    <Grid>
      <CenteredGrid></CenteredGrid>
    </Grid>
  );
}
