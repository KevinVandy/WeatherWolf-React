import React, {useReducer} from 'react';
import LocationContext from './locationContext';
import LocationReducer from './locationReducer';
import Axios from 'axios';
import {} from '../types';

const BASE = 'http://localhost:9999/location'