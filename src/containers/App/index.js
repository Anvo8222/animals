import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Animals from './Animals';
import Buttons from './Buttons';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const [isShowButtons, setShowButtons] = useState(false);

  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };
  return (
    <View>
      <View style={homeStyle.header}>
        <Text style={homeStyle.title}>{`View:${turn}`}</Text>
        <TouchableOpacity
          onPress={onSetShowButtons}
          onLongPress={onSetShowButtons}>
          <Image style={homeStyle.cartImg} source={images.home.cart} />
        </TouchableOpacity>
      </View>
      {isShowButtons ? <Buttons /> : <Animals />}
    </View>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
