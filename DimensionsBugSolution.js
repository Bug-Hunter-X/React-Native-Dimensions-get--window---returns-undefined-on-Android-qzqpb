```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const getDimensions = () => {
      const { width, height } = Dimensions.get('window');
      setDimensions({ width, height });
    };

    getDimensions(); // Call on mount
    Dimensions.addEventListener('change', getDimensions); //Listen to changes

    return () => {
      Dimensions.removeEventListener('change', getDimensions);
    };
  }, []);

  if (!dimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
```