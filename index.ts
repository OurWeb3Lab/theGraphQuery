import { request, gql } from 'graphql-request'

async function query() {
    const document = gql`
    {
        adds {
            commulate
        }
    }
    `
    const sd = await request('http://106.53.207.137:8000/subgraphs/name/mySubgraph', document)
    console.log(sd)
}
query()