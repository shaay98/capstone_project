import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: 'us-east-1',
  credentials: {
      accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY
  },
});

const docClient = DynamoDBDocumentClient.from(client);
const tableName = 'my-boutique-project';
export const getProduct = async (productId) => {
  const params = {
    TableName: 'my-boutique-project',
    Key: { "Product-Id": productId },
  };

  try {
    const { Item } = await docClient.send(new GetCommand(params));
    return Item;
  } catch (error) {
    console.error('DynamoDB error:', error);
    throw error;
  }
};

export const createProduct = async (product) => {
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