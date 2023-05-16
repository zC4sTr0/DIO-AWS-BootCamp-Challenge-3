"use strict"
const AWS = require("aws-sdk");

const updateItem = async (event) => {
   const dynamodb = new AWS.DynamoDB.DocumentClient();
   const {itemStatus} = JSON.parse(event.body);
   const {id} = event.pathParameters;
   let item;

   await dynamodb.update({
      TableName: "TabelaItem",
      Key: {id},
      UpdateExpression: "set itemStatus = :itemStatus",
      ExpressionAttributeValues: {
         ":itemStatus": itemStatus
      },
      ReturnValues: "ALL_NEW"
   }).promise();
  
   return {
      statusCode: 200,
      body: JSON.stringify(item)
   };
};

module.exports = {
   handler: updateItem
};
