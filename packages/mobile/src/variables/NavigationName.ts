// Here we can import new screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ExampleContextAPI from '../screens/ExampleContextAPI';
import ExampleContextAPI2 from '../screens/ExampleContextAPI2';
import AxiosExample from '../screens/AxiosExample';
import { MoviesList } from '../screens/Movies/MoviesList';

export enum NavigationName {
    Home= 'HomeScreen',
    Details= 'DetailsScreen',
    ExampleContextAPI= 'ExampleContextAPI',
    ExampleContextAPI2= 'ExampleContextAPI2',
    AxiosExample= 'AxiosExample',
    MovieList= 'MoviesList'
}