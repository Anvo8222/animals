import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn, setAnimal } from './actions';
import animals from './data/animal';
import { makeAnimal, makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function Animals({ dispatch, animal, turn }) {
  const [animalIndex, setAnimalIndex] = useState(animal);
  const onSetAnimal = () => {
    if (turn <= 0) return false;
    dispatch(decrementTurn(1));
    if (animalIndex >= animals.length - 1) {
      setAnimalIndex(0);
    } else {
      setAnimalIndex(animalIndex + 1);
    }
    dispatch(setAnimal(animalIndex));
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
      <View style={homeStyle.description}>
        <Text style={homeStyle.textDescription}>
          {animals[animalIndex].description}
        </Text>
      </View>
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
  animal: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  animal: makeAnimal(),
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(Animals);
