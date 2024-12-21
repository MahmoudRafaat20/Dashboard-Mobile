import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Sample static data to be displayed
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    first_name: 'John',
    last_name: 'Doe'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    first_name: 'Jane',
    last_name: 'Smith'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    first_name: 'James',
    last_name: 'Brown'
  },
];

// UserCard to display individual user
const UserCard = ({ user }: any) => (
  <View style={styles.cardContainer}>
    <Image style={styles.userImage} source={{ uri: user.avatar }} />
    <Text style={styles.userName}>{user.first_name} {user.last_name}</Text>
  </View>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Simulating API call with the DATA array for this example
  useEffect(() => {
    // If you want to simulate an API call, you can use this useEffect
    // Otherwise, you can leave it empty if you only want static data
  }, []);

  // Function to simulate loading more data, if necessary
  const fetchMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentPage(currentPage + 1);
    setIsLoading(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA} // Use the static DATA array here
          renderItem={({ item }) => <UserCard user={item} />} // Render each item using UserCard
          keyExtractor={(item) => item.id} // Unique key for each item (id from DATA)
          onEndReached={fetchMore} // Fetch more data when reaching the end of the list
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => (isLoading ? <ActivityIndicator size="large" color="blue" /> : null)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center', // Added this to ensure the content is centered
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
