'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn(
                'posts',
                'userId', {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
            ),
        ]);
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};