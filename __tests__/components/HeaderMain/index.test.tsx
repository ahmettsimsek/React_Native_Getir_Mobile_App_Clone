// React ve test kütüphanesi import edilir
import React from 'react';
import { render } from '@testing-library/react-native';

// Test etmek istediğimiz bileşen import edilir
import HeaderMain from '../../../src/components/HeaderMain';

// Test grubu: "components/HeaderMain" başlığıyla tanımlanır
describe('components/HeaderMain', () => {

  // Bu test, HeaderMain bileşeninin düzgün şekilde render edilip edilmediğini kontrol eder
  test("rendersCorrectly", () => {

    // Bileşeni sanal ortamda render ederiz
    const { getByTestId, debug } = render(<HeaderMain />);

    // debug() ile render edilen bileşen ağacını konsola basarız
    debug(); 
    
    // Test yazmak için örnek: belirli bir testID ile öğe var mı diye kontrol edilebilir
    // expect(getByTestId('header-title')).toBeTruthy();
  });

});

