import {Store} from './store';

export const Ikea: Store = {
  currency: '€',
  labels: {
    inStock: {
      container:
        'div.js-available-for-delivery > div.range-revamp-stockcheck__item > span.range-revamp-stockcheck__text',
      text: ['Confirme a disponibilidade e as opções de entrega no checkout.'],
    },
    outOfStock: {
      container:
        'div.js-available-for-delivery > div.range-revamp-stockcheck__item > span.range-revamp-stockcheck__text',
      text: ['Não está disponível para entrega'],
    },
  },
  links: [
    {
      brand: 'asus',
      model: 'strix oc',
      series: '3090',
      url:
        'https://www.ikea.com/pt/pt/p/jaervfjaellet-cadeira-giratoria-c-bracos-gunnared-cinz-esc-preto-s99275632/',
    },
    {
      brand: 'asus',
      model: 'strix',
      series: '3090',
      url:
        'https://www.ikea.com/pt/pt/p/jaervfjaellet-cadeira-giratoria-c-bracos-glose-preto-s89275623',
    },
  ],
  name: 'ikea',
  waitUntil: 'domcontentloaded',
};
