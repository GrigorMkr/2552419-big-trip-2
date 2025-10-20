
const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const POINT_DESTINATIONS = ['Amsterdam', 'Geneva', 'Chamonix'];

const POINT_OFFERS = [
  'Order Uber', 'Business class', 'Extra luggage', 'Comfort seat',
  'First class', 'Meal included', 'Cabin upgrade', 'All inclusive',
  'Rent a car', 'Extra insurance', 'Add luggage', 'Switch to comfort',
  'Add meal', 'Choose seats', 'Travel by train', 'Add breakfast',
  'Late checkout', 'Book tickets', 'Lunch in city', 'Wine tasting',
  'Dessert menu'
];

const POINT_DESCRIPTIONS = [
  'Amsterdam is a beautiful city known for its canals, cycling culture, and historic architecture.',
  'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
  'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it is renowned for its skiing.'
];

const SortType = {
  DAY: 'day',
  TIME: 'time',
  PRICE: 'price',
  EVENT: 'event',
  OFFER: 'offer'
};

const EnabledSortType = {
  [SortType.DAY]: true,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.EVENT]: false,
  [SortType.OFFER]: false
};

export {
  POINT_TYPES,
  POINT_DESTINATIONS,
  POINT_OFFERS,
  POINT_DESCRIPTIONS,
  SortType,
  EnabledSortType
};
