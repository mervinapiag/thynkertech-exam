"use strict";

const axios = require("axios");

/**
 * A set of functions called "actions" for `custom-api`
 */

module.exports = {
  async getUsersFromWPApi() {
    try {
      console.log(process.env.WP_API_BASE_URL);
      console.log(process.env.WP_TOKEN);

      const response = await axios.get(`${process.env.WP_API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${process.env.WP_TOKEN}`,
        },
      });

      return { status: response.status, data: response.data };
    } catch (error) {
      console.error("Error Fetching users:", error);
      return null;
    }
  },
};
