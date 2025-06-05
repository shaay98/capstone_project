import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

// Initialize the DynamoDB client
const client = new DynamoDBClient({ region: 'global' });

// Create the DocumentClient
const docClient = DynamoDBDocumentClient.from(client);

// Define the table name
const tableName = 'Products';

// Function to get a product by ID
const getProduct = async (productId) => {
  const params = {
    TableName: tableName,
    Key: { productId },
  };
  try {
    const { Item } = await docClient.send(new GetCommand(params));
    console.log(Item);
    return Item;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to retrieve product');
  }
};

// Function to create a new product
const createProduct = async (product) => {
  const params = {
    TableName: tableName,
    Item: product,
  };
  try {
    await docClient.send(new PutCommand(params));
    console.log('Product created:', product);
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw new Error('Failed to create product');
  }
};

export { getProduct, createProduct };

