# Find a useful starting point for the job you need done

**PipMCP project directory**

You know the business problem or the app you use, but do not want to choose a technical integration format first.

**Made for:** People choosing an assistant workflow for their business

No account needed to browse. Choose a project when you are ready to connect an app.

## Ask your AI to set this up

Paste this into a coding assistant that can open project files and run commands, such as Codex, Claude Code or Grok Build. You do not need to understand the code first.

```text
Help me find the right project here: https://github.com/jannikco/pipmcp-connectors

I'm not a programmer. My goal is: Find a useful starting point for the job you need done.

Ask what I want to accomplish and which apps I already use. Read the directory and suggest
a suitable project, explaining the result I could get in plain English. Tell me which
account or connection I need, then open that project's instructions and guide me through
the first small step. Show me any proposed changes before making them.
```

## Three useful things to ask for

```text
Help me find a project for the business task I describe. Explain the difference between a
working client and a setup guide.
```

```text
Compare suitable entries using their actual supported actions and account requirements. Do
not assume that every listed app is already connected.
```

```text
Choose one starting point and give me a short setup checklist, including the key and
review steps required before a real action.
```

## Your path to a real result

```mermaid
flowchart LR
  A["Describe your goal"] --> B["Choose a project"] --> C["Read its setup guide"] --> D["Try your selected task"]
```

1. [Open the task directory](https://jannikco.github.io/pipmcp-connectors/start/).
2. Choose the outcome and apps you need.
3. Give the selected project's link to your AI assistant.

**What to expect:** Browse task guides, app pages and published project links. A directory entry is a starting point, not proof that an app is connected. Real work happens in the chosen product and requires its account, key and permissions.

The directory helps you choose a project; it does not run connected-app actions.

## Keep going

- [Connect an API you control](https://github.com/jannikco/openapi-to-mcp)
- [Try the GitHub project](https://github.com/jannikco/github-mcp)

<details>
<summary>Technical reference: installation commands, exact capabilities and troubleshooting</summary>

<!-- people-first:technical:start -->
# MCP connectors, API SDKs and AI-agent workflows

**Find a useful GitHub project. Connect your account. Build the workflow you need.**

[Explore the directory →](https://jannikco.github.io/pipmcp-connectors/) · [Choose a task](https://jannikco.github.io/pipmcp-connectors/tasks/) · [LinkedIn with LeadAdapter](https://jannikco.github.io/pipmcp-connectors/solutions/leadadapter/) · [Import your own API](https://pipmcp.com/github/start?integration=openapi-to-mcp&utm_source=github&utm_campaign=github-pipmcp-connectors)

205 public GitHub projects · 550 integration guides · 90 hosted PipMCP connector clients · 102 task guides.

## Start with what you want to build

| Your task | Start here |
| --- | --- |
| Research LinkedIn people, review a shortlist and move approved prospects into CRM | [LinkedIn API](https://github.com/jannikco/linkedin-api), [Python SDK](https://github.com/jannikco/linkedin-python-sdk), [TypeScript SDK](https://github.com/jannikco/linkedin-typescript-sdk) |
| Connect your assistant to authorized LinkedIn tools | [LeadAdapter MCP](https://github.com/jannikco/linkedin-mcp) |
| Work with CRM records from AI agents | [HubSpot](https://github.com/jannikco/hubspot-mcp), [Pipedrive](https://github.com/jannikco/pipedrive-mcp), [Attio](https://github.com/jannikco/attio-mcp) |
| Review commerce and payment operations | [Shopify](https://github.com/jannikco/shopify-mcp), [Stripe](https://github.com/jannikco/stripe-mcp) |
| Build engineering and team workflows | [GitHub](https://github.com/jannikco/github-mcp), [Slack](https://github.com/jannikco/slack-mcp), [Linear](https://github.com/jannikco/linear-mcp) |
| Turn your own API into hosted tools | [OpenAPI](https://github.com/jannikco/openapi-to-mcp), [Swagger](https://github.com/jannikco/swagger-to-mcp), [Postman](https://github.com/jannikco/postman-to-mcp), [GraphQL](https://github.com/jannikco/graphql-to-mcp) |

The repositories are the primary installation and acquisition entrypoints. This directory brings their task guides, access requirements and related workflows together.

## One service key for your agent

**PipMCP projects:** connect the provider in PipMCP, create a developer API key with connectors:read/call and set PIPMCP_API_KEY. The public client discovers your actual hosted tools. Execution, credentials, policy/approval and usage controls remain on the private service. Multiple accounts require an explicit integration/connection selection.

**LeadAdapter projects:** use LEADADAPTER_API_KEY for the REST SDKs or remote MCP bridge. Research, enrichment and CRM access depend on your workspace permissions and connected profile. Review exact prospects before native promotion; separately approve external CRM sync.

Coding-agent skills are provided for Codex, Claude Code and Grok Build. They run in the current agent session; no extra AI model API key is required.

## What each project provides

Hosted connector clients include authenticated schema discovery, a stdio MCP bridge, durable call receipts, task instructions and runnable synthetic fixtures. Existing setup doctors remain labeled Setup. Import clients preview a local definition and upload it only after explicit confirmation; review, publish and connect the private API before calling custom-api tools.

Transport/contract testing and real provider execution have separate evidence. A catalog listing, tool discovery or queued receipt does not establish a completed provider result. Historical local MIT versions remain in Git history; they do not prove current hosted execution. See the [evidence guide](https://jannikco.github.io/pipmcp-connectors/guides/capability-evidence/).

## Search locally or from a coding agent

```sh
git clone https://github.com/jannikco/pipmcp-connectors.git
cd pipmcp-connectors
npm ci --ignore-scripts
npm test
node cli.mjs tasks research --json
node cli.mjs search hubspot --json
python3 -m http.server 8080
```

Open http://localhost:8080/. Machine discovery is available in [tasks.json](tasks.json), [catalog.json](catalog.json) and [llms.txt](llms.txt). This static directory never accepts credentials or executes a provider action.

[All integrations](https://jannikco.github.io/pipmcp-connectors/) · [Task library](https://jannikco.github.io/pipmcp-connectors/tasks/) · [Workflow guides](https://jannikco.github.io/pipmcp-connectors/workflows/) · [Connection guides](https://jannikco.github.io/pipmcp-connectors/guides/)

MIT for the directory/client code. Provider names do not imply endorsement. Keep credentials and customer records out of public issues.

<!-- people-first:technical:end -->

</details>
