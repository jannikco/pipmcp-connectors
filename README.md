# Connect your APIs to AI workflows

**Find the right integration. Run a useful first workflow. Take it into production with PipMCP.**

Explore API clients, MCP servers and practical integration guides for sales, customer support, commerce, cloud infrastructure and AI applications. The directory brings the projects together so you can move from “how do I connect this?” to the right repository and setup.

**[Explore the integration directory →](https://jannikco.github.io/pipmcp-connectors/)** · [Bring your own API](https://pipmcp.com/github/start?integration=openapi-to-mcp&utm_source=github&utm_campaign=github-pipmcp-connectors&utm_content=readme) · [LinkedIn API with LeadAdapter](https://github.com/jannikco/linkedin-api)

## Choose your next workflow

| What you want to build | Start here |
| --- | --- |
| LinkedIn search, engagement, messaging, publishing and CRM workflows | [LeadAdapter LinkedIn API](https://github.com/jannikco/linkedin-api) |
| AI assistants that work with CRM records | [HubSpot](https://github.com/jannikco/hubspot-mcp), [Pipedrive](https://github.com/jannikco/pipedrive-mcp), [Attio](https://github.com/jannikco/attio-mcp) |
| Store and payment operations | [Shopify](https://github.com/jannikco/shopify-mcp), [Stripe](https://github.com/jannikco/stripe-mcp), [WooCommerce](https://github.com/jannikco/woocommerce-mcp) |
| Documents and team productivity | [Google Drive](https://github.com/jannikco/google-drive-mcp), [Google Sheets](https://github.com/jannikco/google-sheets-mcp), [Notion](https://github.com/jannikco/notion-mcp) |
| Engineering and cloud workflows | [GitHub](https://github.com/jannikco/github-mcp), [Vercel](https://github.com/jannikco/vercel-mcp), [DigitalOcean](https://github.com/jannikco/digitalocean-mcp) |
| Search, retrieval and AI jobs | [Tavily](https://github.com/jannikco/tavily-mcp), [Qdrant](https://github.com/jannikco/qdrant-mcp), [Replicate](https://github.com/jannikco/replicate-mcp) |
| Your own API, exposed as AI tools | [OpenAPI](https://github.com/jannikco/openapi-to-mcp), [Swagger](https://github.com/jannikco/swagger-to-mcp), [Postman](https://github.com/jannikco/postman-to-mcp), [GraphQL](https://github.com/jannikco/graphql-to-mcp) |

These are integration building blocks. Each repository describes the operations it implements; cross-system workflows require configuring the corresponding accounts and connections.

## How to use the directory

1. **Search your system or task.** Filter by provider, category, operation or authentication method.
2. **Pick a runnable connector or setup guide.** Connector pages link to the actual public repository; setup pages explain what you need before connecting.
3. **Run the repository’s quick-start.** Use your own authorized account and the credentials named by that project.
4. **Choose managed operation when you need it.** PipMCP handles hosted connections, endpoint access, policy/approvals and usage records. Some providers use a ready template; others require importing an API definition.

## What is available

550 provider guides · 91 implemented provider connectors · 91 workflow guides · 7 connection/compiler guides.

The catalog also records legacy setup utilities and SDK examples. Page counts are not counts of live account connections: **Documented** means a source/contract is described, **Tested** means package/fixture behavior is checked, and **Live** requires a named provider-operation receipt. The individual pages keep these levels separate.

## Why PipMCP

A local connector is a useful starting point. When the integration needs to serve a team, PipMCP gives you a hosted place to manage provider credentials, publish tools, issue scoped endpoint access and apply execution policy. The provider’s permissions and your configured tool inventory remain the authority for what can run.

**[Set up your API in PipMCP →](https://pipmcp.com/github/start?integration=openapi-to-mcp&utm_source=github&utm_campaign=github-pipmcp-connectors&utm_content=readme)**

## Run this directory locally

```sh
git clone https://github.com/jannikco/pipmcp-connectors.git
cd pipmcp-connectors
npm ci --ignore-scripts
npm test
npm start -- hubspot
python3 -m http.server 8080
```

Open http://localhost:8080/. For machine-readable search, run `node cli.mjs search --artifactType Connector --status Tested --json`. Static search does not collect credentials or send runtime telemetry.

## More resources

- [All integration guides](https://jannikco.github.io/pipmcp-connectors/)
- [Workflow library](https://jannikco.github.io/pipmcp-connectors/workflows/)
- [Connection and compiler guides](https://jannikco.github.io/pipmcp-connectors/guides/)
- [PipMCP](https://pipmcp.com/)
- [LeadAdapter API documentation](https://leadadapter.com/docs/api-reference?lang=en)

MIT for this directory’s code. Provider names do not imply endorsement. Report reproducible documentation issues in this repository; keep credentials and customer records out of public issues.
