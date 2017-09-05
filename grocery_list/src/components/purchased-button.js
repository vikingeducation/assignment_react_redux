import React from 'react';

export default ({ isPurchased, children }) => (isPurchased ? null : children);
