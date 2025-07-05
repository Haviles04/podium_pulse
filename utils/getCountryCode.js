export const getCountryCode = (nationality) => {
  switch (nationality.trim()) {
    case 'American':
      return 'US';
    case 'Dutch':
      return 'BE';
    case 'Mexican':
      return 'MX';
    case 'Monegasque':
      return 'MC';
    case 'British':
      return 'GB';
    case 'Spanish':
      return 'ES';
    case 'French':
      return 'FR';
    case 'Canadian':
      return 'CA';
    case 'Japanese':
      return 'JP';
    case 'Chinese':
      return 'CN';
    case 'Thai':
      return 'TH';
    case 'Danish':
      return 'DK';
    case 'Australian':
      return 'AU';
    case 'German':
      return 'DE';
    case 'Finnish':
      return 'FI';
    case 'Brazilian':
      return 'BR';
    case 'Belgian':
      return 'BE';
    case 'New Zealander':
      return 'NZ';
    case 'Swedish':
      return 'CH';
    case 'Russian':
      return 'RU';
    case 'Indonesian':
      return 'ID';
    case 'Venezuelan':
      return 'VE';
    case 'Argentine':
      return 'AR';
  }
};
