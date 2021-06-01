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
    const postsArray = [];
    postsArray.push({
      title: 'titulo primero',
      text: 'texto1',
      creator_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    postsArray.push({
      title: 'titulo segundo',
      text: 'texto2',
      creator_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    postsArray.push({
      title: 'titulo tercero',
      text: 'texto3',
      creator_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return queryInterface.bulkInsert('posts', postsArray);
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
