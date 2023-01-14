import React, { useState } from 'react';
// import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';

export default function Pickerr(props){
  
  const [moedaSelecionada, setMoedaSelecionada] = useState(0);
  const [moedas, setMoedas] = useState(props.moedas)

  let moedasItem = moedas.map( (v, k) => {
    // console.log('Opção: ' + k)
    return <Picker.Item key={k} value={v} label={v.label} />
  })

  function mudaMoeda (valor) {
    console.log('Opção selecionada: ' + JSON.stringify(valor))
    setMoedaSelecionada(valor)
    props.onChange(valor.key)
  } 

  return(
    <Picker
      selectedValue={ moedaSelecionada }
      onValueChange={ (itemValue, itemIndex) => mudaMoeda(itemValue) }
    >
      <Picker.Item key={null} value="" label="Selecione uma moeda" />
      {moedasItem}
    </Picker>
  );
}