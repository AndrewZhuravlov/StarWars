import React from 'react';
import App from '../app/App';
import withData from '../HOC-helpers/withData';
import withRenderItems from '../HOC-helpers/withRenderItems';
import ItemList from '../itemList/randomList';
import SwapiServices from '../swapiService/swapiService';

const swapi  = new SwapiServices();

const ListOfStarships = withRenderItems( withData(ItemList, swapi.getAllStarships),
                        (item)=> (`${item.Name}`), new App().onPersonClick);

export { ListOfStarships };                        