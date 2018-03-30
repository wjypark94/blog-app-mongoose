'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();
app.use(morgan('common'));
app.use(bodyParser.json());