"use strict"

const AWS = require("aws-sdk");

const fetchItems = async (event) => {
   const dynamodb = new AWS.DynamoDB.DocumentClient();
   let items;
   try{
      const results = await dynamodb.scan({
         TableName: "TabelaItem"
      }).promise();
      items = results.Items;
   } catch (err) {
      console.log(err);   
   }
   return {
      statusCode: 200,
      body: JSON.stringify(items)
   };
};

module.exports = {
   handler: fetchItems
};
