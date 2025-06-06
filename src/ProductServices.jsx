import React from 'react'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY}
});

const docClient = DynamoDBDocumentClient.from(client);

const tableName = 'my-boutique-project';

const getProduct = async (productId) => {
  const params = {
    TableName: tableName,
    Key: { "Product-Id": productId },};

  try {
    const { Item } = await docClient.send(new GetCommand(params));
    return Item;
  } catch (error) {
    console.error('DynamoDB error:', error);
    throw error;
  }
};
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export const getAllProducts = async () => {
  const params = {
    TableName: "my-boutique-project",
  };

  try {
    const data = await docClient.send(new ScanCommand(params));
    return data.Items || [];
  } catch (error) {
    console.error("Error scanning table:", error);
    throw error;
  }
};

export default getProduct;