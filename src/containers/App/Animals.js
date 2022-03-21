import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn, setAnimalIndex } from './actions';
import animals from './data/animals';
import { makeAnimalIndex, makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function Animals({ dispatch, animalIndex, turn }) {
  const onSetAnimal = () => {
    if (turn <= 0) return false;
    dispatch(decrementTurn(1));
    dispatch(
      setAnimalIndex(animalIndex >= animals.length - 1 ? 0 : animalIndex + 1),
    );
  };

  return (
    <>
      <View style={homeStyle.name}>
        <Text style={homeStyle.textName}>{animals[animalIndex].name}</Text>
      </View>
      <View style={homeStyle.view}>
        <Image style={homeStyle.frame} source={images.home.frame} />
        <Image style={homeStyle.animalImg} source={animals[animalIndex].img} />
      </View>
      <View style={homeStyle.info}>
        <Text style={homeStyle.textInfo}>Info</Text>
      </View>
      <ScrollView style={homeStyle.description}>
        <Text style={homeStyle.textDescription}>
          {animals[animalIndex].description}
        </Text>
      </ScrollView>
      <View style={homeStyle.view}>
        <TouchableOpacity onPress={onSetAnimal} onLongPress={onSetAnimal}>
          <Image style={homeStyle.next} source={images.home.next} />
        </TouchableOpacity>
      </View>
    </>
  );
}

Animals.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
  animalIndex: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  animalIndex: makeAnimalIndex(),
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(Animals);
