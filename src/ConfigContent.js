import { createClient } from 'contentful'


export const client = () => createClient({
    accessToken: 'krRcqohK1ihMOsJXM7DrJSBWJDLa5FO-EfuJzhmwzYg',
    space: 'yo95owisxu3q',
  });

export const opt = {
    order: "sys.createdAt",
    limit: 1000
  }


export let result

export const ConnectContent = async() => {

      try {
          result = await client().getEntries(opt)
          result = result.items
      } catch (err) {
          console.error(err)
      }
      return result;
  }