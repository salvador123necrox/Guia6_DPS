import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisiblePupusas, setModalVisiblePupusas] = useState(false);
  const [modalVisibleTazumal, setModalVisibleTazumal] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel de Centroamerica.
                Bien chidas xd
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblePlaya(!modalVisiblePlaya);
                }}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePupusas}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ricas Pupusas</Text>
              <Text>
                Las pupusas son el platillo predilecto de todos los salvadoreños. Hay una amplia variedad de sabores y se puede comer a cualquier hora del día :)
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblePupusas(!modalVisiblePupusas);
                }}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleTazumal}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Tazumal</Text>
              <Text>
                El Tazumal es uno de los sitios arqueológicos que vale la pena visitar en el Salvador. Es una pirámide de gran tamaño de aspecto imponente. El sitio donde se encuentra está en muy buen estado y posee un museo donde se pueden encontrar piezas e información sobre las diferentes culturas que se asentaron en la región.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleTazumal(!modalVisibleTazumal);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight
            onPress={() => {
              setModalVisiblePlaya(!modalVisiblePlaya);
            }}>
          <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisiblePlaya(!modalVisiblePlaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
        </View>

        <Text style={styles.titulo}>Platillos Salvadoreños</Text>
        <View>
          <View>
          <TouchableHighlight
            onPress={() => {
              setModalVisiblePupusas(!modalVisiblePupusas);
            }}>
            <Image
              style={styles.mejores}
              source={require('./src/img/mejores1.jpg')}
            />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./src/img/mejores2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./src/img/mejores3.jpg')}
            />
          </View>
        </View>

        <Text style={styles.titulo}>Rutas turisticas</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta1.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
          <TouchableHighlight
            onPress={() => {
              setModalVisibleTazumal(!modalVisibleTazumal);
            }}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta2.jpg')}
            />
            </TouchableHighlight>
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta3.jpg')}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require('./src/img/ruta4.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    marginTop: 30,
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});
export default App;
