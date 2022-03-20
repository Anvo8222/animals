import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export const eggStyle = StyleSheet.create({
  eggs: {
    resizeMode: 'contain',
    width: 150,
    height: 250,
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export const homeStyle = StyleSheet.create({
  block: {
    margin: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    color: '#7ebafa',
    fontWeight: 'bold',
  },
  textName: {
    fontSize: 22,
    color: '#62aefc',
    fontWeight: 'bold',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartImg: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  frame: {
    width: 180,
    height: 180,
  },
  animalImg: {
    width: 160,
    height: 160,
    position: 'absolute',
    resizeMode: 'contain',
  },
  info: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInfo: {
    fontSize: 30,
    color: '#2b9cff',
    fontWeight: 'bold',
  },
  description: {
    paddingRight: 16,
    paddingLeft: 16,
    width: '100%',
    height: 180,
    maxHeight: 170,
    overflow: 'hidden',
  },
  textDescription: {
    fontSize: 16,
    color: '#2b9cff',
    fontWeight: '400',
  },
  next: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginTop: 8,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '80%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: `#fff`,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
