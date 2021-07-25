import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Grid, StackPanel, TextBlock} from 'react-native-xaml';

const App = () => {
  // change View to Grid to break it
  const Container = Grid;
  return (
    <Container style={styles.container}>
      <FlatList
        data={[
          {firstName: 'Devin', lastName: 'Holland'},
          {firstName: 'Dan', lastName: 'Klein'},
          {firstName: 'Dominic', lastName: 'Fitzpatrick'},
          {firstName: 'Jackson', lastName: 'Sidhu'},
          {firstName: 'James', lastName: 'Watson'},
          {firstName: 'Joel', lastName: 'Diaz'},
          {firstName: 'John', lastName: 'Doe'},
          {firstName: 'Jillian', lastName: 'Doe'},
          {firstName: 'Jimmy', lastName: 'Doe'},
          {firstName: 'Julie', lastName: 'Doe'},
        ]}
        renderItem={({item}) => (
          <StackPanel style={styles.itemContainer}>
            <TextBlock style={styles.item} text={item.firstName} />
            <TextBlock text={item.lastName} />
          </StackPanel>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    height: 60,
  },
  item: {
    paddingBottom: 5,
    fontSize: 18,
  },
});

export default App;
