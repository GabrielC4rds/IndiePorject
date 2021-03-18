import { createClient } from 'contentful'
const contentful = require("contentful")
const config = require("./config.json")


export const client = () => contentful.createClient(config.contentful);

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