# Flutter - SearchBar

> A regular search bar

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - context: `BuildContext` - **Required**
 - controller: `TextEditingController` - **Required**
 - hintText: `String` - **Required**
 - onSearchTextChanged: `void Function(String)` - **Required**


### Example

```dart
    searchBar(
        context, 
        TextEditingController(), 
        'Please type something', 
        (String searchText) {
            print(searchText);
        },
    );
```
