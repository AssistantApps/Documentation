# Version tile

> Used to display the details of a Patreon supporter.

Available from: [github.com/AssistantApps/WebComponents](https://github.com/AssistantApps/WebComponents)

### Params
 - guid: `string`
 - markdown: `string`
 - buildname: `string`
 - buildnumber: `number`
 - platforms: `Array<string>`
 - activedate: `Date`

### CSS Variables
- Name: `--assistantapps-version-background-colour`
  - DefaultValue: `#rgba(174, 176, 179, 0.7)`
- Name: `--assistantapps-version-text-colour`
  - DefaultValue: `white`

### Example

```html
  <assistant-apps-version-search-tile
    guid="00-000-0-0-0-0--0"
    markdown="- Stuff changed"
    buildname="1.0.0"
    buildnumber="101"
    platforms="[]"
    activedate="2021-12-10T20:00:00Z"
  />
```
<assistant-apps-version-search-tile
  guid="00-000-0-0-0-0--0"
  markdown="- Stuff changed"
  buildname="1.0.0"
  buildnumber="101"
  platforms="[]"
  activedate="2021-12-10T20:00:00Z"
/>
