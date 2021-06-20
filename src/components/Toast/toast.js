import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = (label, type) => toast[type](label, {duration: 4000,});

export default notify;