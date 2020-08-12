import React from 'react';
import { isEmpty } from 'lodash';

const Error = ({ message }) => !isEmpty(message) ? <div className="error-message">{message}</div> : null;

export default Error;