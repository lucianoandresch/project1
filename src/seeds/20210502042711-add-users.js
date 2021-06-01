'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const usersArray = [];
    usersArray.push({
      first_name: 'Yaru',
      last_name: 'Zhang',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    usersArray.push({
      first_name: 'Yaru1',
      last_name: 'Zhang1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    usersArray.push({
      first_name: 'Yaru2',
      last_name: 'Zhang2',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('users', usersArray);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
