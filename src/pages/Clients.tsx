<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const ClientCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="flex animate-scroll">
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.id}-${index}`}
            className="flex-none w-64 mx-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
              <p className="text-gray-600 text-center text-sm">{client.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const ClientCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="flex animate-scroll">
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.id}-${index}`}
            className="flex-none w-64 mx-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
              <p className="text-gray-600 text-center text-sm">{client.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
>>>>>>> a05c71d (Latest)
};