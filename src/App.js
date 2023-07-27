import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './rootReducers';
import ImgSlider from './ImgSlider';
import Navbar from './Navbar';
import Products from './Products';
import Shoes from './Shoes';
import Footer from './Footer';
function App() {
  const store = createStore(rootReducers);
  
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <ImgSlider />
        <Shoes />
        <Products />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
