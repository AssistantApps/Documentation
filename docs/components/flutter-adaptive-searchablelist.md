# Flutter - SearchableList

> This is the base of all searchable lists and grids

Available from: [github.com/AssistantApps/Flutter.Common](https://github.com/AssistantApps/Flutter.Common)

### Params
 - listGetter: `Future<ResultWithValue<List<T>>>` - **Required**
 - listItemSearch: `bool Function(T, String)`  - _Named_ - **Optional**
 - listItemDisplayer: `Widget Function(BuildContext, T)`  - _Named_ - **Optional**
 - listItemWithIndexDisplayer: `Widget Function(BuildContext, T, int)`  - _Named_ - **Optional**
 - key: `Key`  - _Named_ - **Optional**
 - firstListItemWidget: `Widget`  - _Named_ - **Optional**
 - lastListItemWidget: `Widget`  - _Named_ - **Optional**
 - hintText: `String`  - _Named_ - **Optional**
 - loadingText: `String`  - _Named_ - **Optional**
 - deleteAll: `void Function()`  - _Named_ - **Optional**
 - minListForSearch: `int`  - _Named_ - **Optional** - DefaultValue: `10`
 - addFabPadding: `bool`  - _Named_ - **Optional** - DefaultValue: `false`
 - backupListGetter: `Future<ResultWithValue<List<T>>>`  - _Named_ - **Optional**
 - backupListWarningMessage: `LocaleKey`  - _Named_ - **Optional**

### Used in 


