# TeamMember tile

> Used to display the details of a TeamMember.

Available from: [github.com/AssistantApps/WebComponents](https://github.com/AssistantApps/WebComponents)

### Params
 - name: `string`
 - role: `string`
 - imageurl: `string`
 - linkname: `string` - **Optional**
 - linkurl: `string` - **Optional**

### CSS Variables
- Name: `--assistantapps-team-member-background-colour`
  - DefaultValue: `rgba(255, 255, 255, 0.1)`
- Name: `--assistantapps-team-member-text-colour`
  - DefaultValue: `#f0f0f0`
- Name: `--assistantapps-team-member-link-text-colour`
  - DefaultValue: `#0000EE`

### Example

```html
  <assistant-apps-team-tile
    name="Documentation test"
    role="Testing"
    imageurl="https://assistantapps.com/assets/favicon/favicon-96x96.png"
    linkname="Homepage"
    linkurl="https://assistantapps.com"
  />
```
<assistant-apps-team-tile
  name="Documentation test"
  role="Testing"
  imageurl="https://assistantapps.com/assets/favicon/favicon-96x96.png"
  linkname="Homepage"
  linkurl="https://assistantapps.com"
/>
