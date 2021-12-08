# Flutter - PopupMenu

> A way to build up the popup menu that is displayed usually on the top right of a card. 

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - context: `BuildContext` - **Required**
 - controller: `TextEditingController` - **Required**
 - hintText: `String` - **Required**
 - onSearchTextChanged: `void Function(String)` - **Required**


### Example

```
    searchBar(
        context, 
        TextEditingController(), 
        'Please type something', 
        (String searchText) {
            print(searchText);
        },
    );
```
